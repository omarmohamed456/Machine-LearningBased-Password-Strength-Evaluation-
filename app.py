# app.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Dict
import joblib
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
import os

# ----- Config -----
MODEL_PATH = os.getenv("MODEL_PATH", "model.joblib")         # a sklearn-compatible pipeline or XGB model
VECTORIZER_PATH = os.getenv("VECTORIZER_PATH", "vectorizer.pkl")  # optional if you use a pipeline
DATASET_PATH = os.getenv("DATASET_PATH", "dangerous_list.txt")    # one item per line
# ------------------

app = FastAPI(title="XGB + Lookup API")

# Allow CORS from local React dev servers. Modify origins for production.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextIn(BaseModel):
    text: str

# Global holders set at startup
model = None
vectorizer = None
dangerous_set = set()

@app.on_event("startup")
def startup_event():
    global model, vectorizer, dangerous_set
    # Load model. The model can be:
    # - a pipeline (vectorizer + xgb wrapped in sklearn pipeline) saved with joblib.dump(pipeline, 'model.joblib')
    # - or separate vectorizer and xgboost model files
    if os.path.exists(MODEL_PATH):
        model = joblib.load(MODEL_PATH)
        print(f"Loaded model from {MODEL_PATH}")
    else:
        # try load separate pieces
        if os.path.exists(VECTORIZER_PATH) and os.path.exists(MODEL_PATH):
            vectorizer = joblib.load(VECTORIZER_PATH)
            model = joblib.load(MODEL_PATH)
            print(f"Loaded vectorizer from {VECTORIZER_PATH} and model from {MODEL_PATH}")
        else:
            raise RuntimeError("Model or vectorizer files not found. Set MODEL_PATH/VECTORIZER_PATH or save a pipeline to MODEL_PATH.")

    # Load dataset lookup into a set for O(1) checks
    if os.path.exists(DATASET_PATH):
        with open(DATASET_PATH, "r", encoding="utf-8") as f:
            # normalize lines (strip whitespace, lowercase)
            dangerous_set = {line.strip().lower() for line in f if line.strip()}
        print(f"Loaded {len(dangerous_set)} entries from {DATASET_PATH}")
    else:
        print(f"Dataset path {DATASET_PATH} not found. dangerous_set will be empty.")

@app.post("/predict")
def predict(payload: TextIn) -> Dict[str, int]:
    """
    Expects JSON: { "text": "...your input..." }
    Returns: { "label": 1 }
    The model must output a single integer label. If model.predict returns arrays, we coerce to int.
    """
    global model, vectorizer
    if model is None:
        raise HTTPException(status_code=500, detail="Model not loaded.")

    text = payload.text
    if text is None:
        raise HTTPException(status_code=400, detail="No text provided.")

    # If you saved a sklearn Pipeline that includes vectorizer + model,
    # you can call model.predict([text]).
    try:
        # some models expect iterable input (list)
        raw_pred = model.predict([text])  # sklearn pipeline handles preprocessing if present
        # raw_pred might be e.g. array([2]) or array([[2]]) depending on model
        label = int(raw_pred[0])
        return {"label": label}
    except Exception as e:
        # fallback: if model needs explicit vectorizer transform:
        if vectorizer is not None:
            X = vectorizer.transform([text])
            raw_pred = model.predict(X)
            label = int(raw_pred[0])
            return {"label": label}
        raise HTTPException(status_code=500, detail=f"Prediction failed: {e}")

@app.post("/check")
def check_text(payload: TextIn) -> Dict[str, str]:
    """
    Simple lookup. Returns "dangerous" or "safe".
    Expects JSON: { "text": "..." }
    """
    global dangerous_set
    text = payload.text
    if text is None:
        raise HTTPException(status_code=400, detail="No text provided.")

    # Normalization strategy: lowercase and strip; you can expand to tokenization/masking
    norm = text.strip().lower()

    if norm in dangerous_set:
        return {"result": "dangerous"}
    else:
        return {"result": "safe"}

if __name__ == "__main__":
    # For development. In production use gunicorn/uvicorn workers.
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)

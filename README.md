# Machine Learning–Based Password Strength Evaluation
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

import re
import uvicorn

app = FastAPI()

# Enable CORS ( localhost:3000) 
app.add_middleware(
    CORSMiddleware,

    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
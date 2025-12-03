import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [input, setInput] = useState("");

  return (
    <div className="page">
      {/* ---- HEADER ---- */}
      <header className="header">
        <div 
          className={`tab ${activeTab === "hello" ? "active" : ""}`}
          onClick={() => setActiveTab("hello")}
        >
          Hello
        </div>

        <div 
          className={`tab ${activeTab === "home" ? "active" : ""}`}
          onClick={() => setActiveTab("home")}
        >
          Home Page
        </div>

        <div 
          className={`tab ${activeTab === "about" ? "active" : ""}`}
          onClick={() => setActiveTab("about")}
        >
          About Us
        </div>
      </header>

      {/* ---- MAIN CONTENT ---- */}
      <main className="content">
        {activeTab === "home" && (
          <div>
            <h2>Type your password here</h2>

            {/* Input box */}
            <input 
              className="input-box"
              type="text"
              value={input}
              placeholder="Enter password..."
              onChange={(e) => setInput(e.target.value)}
            />

            {/* Enter button */}
            <button className="enter-btn">
              Enter
            </button>

            <h2>Output</h2>

            {/* Output box (empty for now) */}
            <div className="output-box"></div>
          </div>
        )}

        {activeTab === "hello" && <h2>Hello Page</h2>}
        {activeTab === "about" && <h2>About Us</h2>}
      </main>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [password, setPassword] = useState("");
  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>

      {/* ---- TOP NAVIGATION ---- */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "150px",
        fontSize: "24px",
        marginBottom: "50px",
        cursor: "pointer",
      }}>
        <span onClick={() => setActiveTab("hello")}>Hello</span>
        <span onClick={() => setActiveTab("home")}>Home Page</span>
        <span onClick={() => setActiveTab("about")}>About Us</span>
      </div>

      {/* ---- PAGE CONTENT ---- */}
      {activeTab === "home" && (
        <div>
          <label style={{ fontSize: "20px" }}>Type your password here</label>
          <br /><br />

          {/* INPUT BOX */}
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "600px",
              height: "40px",
              border: "3px solid black",
              fontSize: "20px",
              padding: "10px"
            }}
          />

          <br /><br />

          {/* ENTER BUTTON */}
          <button
            style={{
              padding: "10px 30px",
              fontSize: "18px",
              cursor: "pointer",
              border: "2px solid black",
              background: "white"
            }}
            onClick={() => {
              // You can add your transform logic later here
              console.log("Entered:", password);
            }}
          >
            Enter
          </button>

          <br /><br /><br />

          {/* OUTPUT BOX — stays blank */}
          <label style={{ fontSize: "20px" }}>Output</label>
          <br /><br />
          <div
            style={{
              width: "600px",
              height: "60px",
              border: "3px solid black",
              fontSize: "20px",
              padding: "10px",
            }}
          >
            {/* intentionally left blank */}
          </div>
        </div>
      )}

      {activeTab === "hello" && <h2>This is the Hello page</h2>}
      {activeTab === "about" && <h2>About Us page content goes here.</h2>}
    </div>
  );
}

export default App;

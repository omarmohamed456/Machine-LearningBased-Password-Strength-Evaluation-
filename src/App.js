import React, { useState } from "react";
import "./App.css";

function AboutUs() {
  const [section, setSection] = useState("about"); // current section

  return (
    <div className="page">
      
      {/* Header */}
      <div className="header">
        <div className="tab active">About Us</div>
      </div>

      {/* Content */}
      <div className="content">
        {section === "about" && (
          <>
            <h2>About Us</h2>
            <p style={{ fontSize: "18px", lineHeight: "1.6", color: "#b10000" }}>
              Hi, we are a passionate team committed to learning, creating, and building beautiful projects.
              We enjoy working on frontend designs, especially with React, and exploring new 
              technologies that help us express creativity and solve problems effectively.
            </p>

            <p style={{ fontSize: "18px", lineHeight: "1.6", marginTop: "20px", color: "#b10000" }}>
              In our free time, we work on improving coding skills, exploring design ideas,
              and developing personal and collaborative projects. Our goal is to keep growing
              and becoming more confident in the world of software development.
            </p>

            <div style={{ marginTop: "30px" }}>
              <h3
                style={{ color: "#ff3c3c", marginBottom: "10px", fontWeight: "600" }}
              >
                Skills
              </h3>
              <ul style={{ color: "#b10000", fontSize: "18px", marginLeft: "20px" }}>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>CSS / UI Design</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
          </>
        )}

        {section === "more" && (
          <div>
            <h2>More Information</h2>
            <p style={{ color: "#b10000", fontSize: "18px" }}>
              Here you can ask about projects, achievements, or team.  
              This section will expand as needed.
            </p>
          </div>
        )}

        {section === "contact" && (
          <div>
            <h2>Contact Us</h2>
            <p style={{ color: "#b10000", fontSize: "18px" }}>
              You can reach us at <strong>00000000000000</strong> or through our social media channels.
            </p>
          </div>
        )}

        {section === "help" && (
          <div>
            <h2>Help</h2>
            <p style={{ color: "#b10000", fontSize: "18px" }}>
              Need assistance? Check our FAQ or send us a message and we will respond promptly.
            </p>
          </div>
        )}
      </div>

      {/* Footer Buttons */}
      <div className="footer">
        <button className="tab" onClick={() => setSection("more")}>More Information</button>
        <button className="tab" onClick={() => setSection("contact")}>Contact</button>
        <button className="tab" onClick={() => setSection("help")}>Help</button>
      </div>
    </div>
  );
}

export default AboutUs;
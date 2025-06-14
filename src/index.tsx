import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const visitor = 222;
  const [bgGreen, setBgGreen] = useState(false);
  const handleClick = () => {
    if(bgGreen) setBgGreen(false);
    else setBgGreen(true);
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20%",
        backgroundColor: bgGreen ? "green" : "white",
        height: "100vh",
        color: bgGreen ? "white" : "black",
        transition: "background-color 0.3s"
      }}
    >
      <h1>Total Visitors</h1>
      <p style={{ fontSize: "3rem" }}>123</p>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "1rem",
          marginTop: "20px",
          cursor: "pointer"
        }}
      >
        Make Background Green
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
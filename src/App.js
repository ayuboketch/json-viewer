import "./App.css";

import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleParse = () => {
    // You'll handle the parsing logic in your index.js later
    // For now, we’ll just simulate calling it
    setError("");
    setOutput("");
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen">
      <h1>JSON Viewer 🧩</h1>

      <div className="content-container">
        {/* Left side - Input */}
        <div className="input-section">
          <div className="section-label">Input JSON</div>
          <textarea
            placeholder="Paste your JSON here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleParse}>Parse JSON</button>
        </div>

        {/* Right side - Output */}
        <div className="output-section">
          <div className="section-label">Formatted Output</div>

          {error && <div className="error-message">❌ Error: {error}</div>}

          {output ? (
            <pre>{output}</pre>
          ) : (
            <div className="output-placeholder">
              Your formatted JSON will appear here...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

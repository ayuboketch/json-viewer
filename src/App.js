import "./App.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleParse = () => {
    setError("");
    setOutput("");
    setCopied(false);
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
          <div className="section-label">
            <span>Formatted Output</span>
            {output && (
              <button
                onClick={handleCopy}
                className={`copy-button ${copied ? "copied" : ""}`}
              >
                {copied ? "✓ Copied!" : "📋 Copy"}
              </button>
            )}
          </div>

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

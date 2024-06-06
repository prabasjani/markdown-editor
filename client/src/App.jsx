import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import hljs from "highlight.js";
import { saveAs } from "file-saver";
import "highlight.js/styles/github.css";

function App() {
  const [markdown, setMarkdown] = useState("");

  // Syntax Highlight function
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((code) => {
      hljs.highlightBlock(code);
    });
  }, [markdown]);

  // File Save function
  const saveFile = () => {
    const blob = new Blob([markdown], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "markdown.md");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Markdown Editor</h1>
      </header>
      <div className="container">
        <textarea
          id="editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <div id="preview">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
      <div className="buttons">
        <button onClick={saveFile}>Save</button>
        <button onClick={() => setMarkdown("")}>Clear</button>
      </div>
    </div>
  );
}

export default App;

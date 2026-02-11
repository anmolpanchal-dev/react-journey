// import './App.css'
import React from "react";
function App() {
  let AITools = [ "ChatGPT", "DALL-E", "Codex", "Whisper", "CLIP", "Jukebox", "OpenAI Gym", "OpenAI Baselines", "OpenAI Spinning Up", "OpenAI Five", "OpenAI Robotics", "OpenAI Scholars", "OpenAI Fellows", "OpenAI Researcher in Residence", "OpenAI API", "OpenAI Codex API", "OpenAI DALL-E API", "OpenAI GPT-3 API", "OpenAI Whisper API" ];
  return (
   <React.Fragment>        
      <h1>AI Tools</h1>
      {AITools.length ===0 ? <p>No AI Tools Found</p> : null}
      <ul className="list-group">
        {AITools.map((tool) => <li  key={tool} className="list-group-item">{tool}</li>)}
      </ul>
    </React.Fragment>
    );
}

export default App

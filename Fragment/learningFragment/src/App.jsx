import './App.css'
import React from "react";
import FoodItems from "./component/FoodItems";
import ErrMsg from "./component/ErrMsg";
function App() {
  let AITools = [ "ChatGPT", "DALL-E", "Codex", "Whisper", "CLIP", "Jukebox", "OpenAI Gym", "OpenAI Baselines", "OpenAI Spinning Up", "OpenAI Five", "OpenAI Robotics", "OpenAI Scholars", "OpenAI Fellows", "OpenAI Researcher in Residence", "OpenAI API", "OpenAI Codex API", "OpenAI DALL-E API", "OpenAI GPT-3 API", "OpenAI Whisper API" ];
  return (
   <React.Fragment>        
      <h1>AI Tools</h1>
      <ErrMsg tools = {AITools}></ErrMsg>
      <FoodItems  tools = {AITools}></FoodItems>
    </React.Fragment>
    );
}

export default App

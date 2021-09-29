import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [emotion, setEmotion] = useState("happy");

  

  return (
    <>
      <h1>Current Emotion is {emotion}</h1>
      <button onClick={() => setEmotion("happy")}> Happy</button>
      <button onClick={() => setEmotion("frustated")}> Frustate</button>
      <button onClick={() => setEmotion("entuastic")}> Entuastic</button>
    </>
  );
}

export default App;

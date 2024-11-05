import React from "react";
import NotesSection from "./Components/NotesSection";
import PocketNoteBg from "./assets/pocketNotesBg.png";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <NotesSection />
      <div className="showNoteSec">
        <img className="PocketNoteBG" src={PocketNoteBg} alt="PocketNoteBG" />
      </div>
    </div>
  );
};

export default App;

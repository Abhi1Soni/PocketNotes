import React, { useState } from "react";
import NotesSection from "./Components/NotesSection";

import "./App.css";
import ShowNoteSec from "./Components/ShowNoteSec";
import CreateNewGroup from "./Components/CreateNewGroup";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const CreateNewGroupHandler = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="container">
      <NotesSection CreateNewGroupHandler={CreateNewGroupHandler} />
      <ShowNoteSec />

      {isFormOpen && <CreateNewGroup />}
    </div>
  );
};

export default App;

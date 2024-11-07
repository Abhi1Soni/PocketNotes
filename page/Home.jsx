import React, { useState } from "react";
import SideBarAndMessageSec from "../src/Components/SideBarAndMessageSec";
import CreateNewGroup from "../src/Components/CreateNewGroup";

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggle = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div>
      <SideBarAndMessageSec toggle={toggle} />
      {isFormOpen && <CreateNewGroup />}
    </div>
  );
};

export default Home;

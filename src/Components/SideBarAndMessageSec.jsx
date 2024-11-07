import React from "react";
import PocketNoteBg from "../assets/pocketNotesBg.png";
import lock from "../assets/lock.png";
import "./SideBarAndMessageSec.css";

const SideBarAndMessageSec = ({ toggle }) => {
  return (
    <div className="container">
      {" "}
      <div className="notesSection">
        <div className="heading">
          <h1>Pocket Notes</h1>
        </div>

        <div className="note">
          <div className="DP">MN</div>
          <h2>My Notes</h2>
        </div>

        <button className="newNotebtn" onClick={toggle}>
          +
        </button>
      </div>
      {/* Message Section */}
      <div className="messageSection">
        <img
          className="PocketNoteBG"
          src={PocketNoteBg}
          alt="PocketNoteBackGround"
        />
        <h1 className="showNoteSecHeading">Pocket Notes</h1>
        <p className="para">
          Send and receive messages without keeping your phone online.
          <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>

        <footer className="footer">
          <img src={lock} alt="lock image" className="lockImage" />
          <p className="footerText">end-to-end encrypted</p>
        </footer>
      </div>
    </div>
  );
};

export default SideBarAndMessageSec;

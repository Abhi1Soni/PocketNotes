import React, { useState } from "react";
import styles from "./NotesSection.module.css";
import NoteCard from "./noteCard";

const NotesSection = ({ CreateNewGroupHandler }) => {
  return (
    <>
      <div className={styles.notesSection}>
        <div className={styles.heading}>
          <h1>Pocket Notes</h1>
        </div>

        <div className={styles.notesNames}>
          <NoteCard />
        </div>

        <button className={styles.newNotebtn} onClick={CreateNewGroupHandler}>
          +
        </button>
      </div>
    </>
  );
};

export default NotesSection;

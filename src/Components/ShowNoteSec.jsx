import React from "react";
import PocketNoteBg from "../assets/pocketNotesBg.png";
import lock from "../assets/lock.png";
import styles from "./ShowNoteSec.module.css";

const ShowNoteSec = () => {
  return (
    <div className={styles.showNoteSec}>
      <img
        className={styles.PocketNoteBG}
        src={PocketNoteBg}
        alt="PocketNoteBackGround"
      />
      <h1 className={styles.showNoteSecHeading}>Pocket Notes</h1>
      <p className={styles.para}>
        Send and receive messages without keeping your phone online.
        <br /> Use Pocket Notes on up to 4 linked devices and 1 mobile phone
      </p>

      <footer className={styles.footer}>
        <img src={lock} alt="lock image" className={styles.lockImage} />
        <p className={styles.footerText}>end-to-end encrypted</p>
      </footer>
    </div>
  );
};

export default ShowNoteSec;

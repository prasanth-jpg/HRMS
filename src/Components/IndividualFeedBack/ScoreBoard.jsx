import React from "react";
import styles from "./IndividualFeedBackTab.module.css";

export default function ScoreBoard() {
  return (
    <div className={styles.section}>
      <h3>ScoreBoard</h3>

      <div className={styles.scoreBoard}>
        <div>
          <p>Total Score</p>
          <h2>16 / 20</h2>
        </div>

        <div>
          <p>Result</p>
          <h2 className={styles.pass}>Selected</h2>
        </div>
      </div>
    </div>
  );
}

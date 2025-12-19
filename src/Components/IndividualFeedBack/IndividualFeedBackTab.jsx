import React, { useState } from "react";
import styles from "./IndividualFeedBackTab.module.css";
import EvaluationCriteria from "./EvaluationCriteria";
import ScoreBoard from "./ScoreBoard";
import Comments from "./Comments";

export default function IndividualFeedBackTab() {
  const [activeState, setActiveState] = useState("ScoreBoard");

  return (
    <>
      <div className={styles.individualFeedBackTab}>
        <div
          className={`${styles.tab} ${
            activeState === "Evaluation" ? styles.active : ""
          }`}
          onClick={() => setActiveState("Evaluation")}
        >
          Evaluation Criteria
        </div>

        <div
          className={`${styles.tab} ${
            activeState === "Comments" ? styles.active : ""
          }`}
          onClick={() => setActiveState("Comments")}
        >
          Comments
        </div>

        <div
          className={`${styles.tab} ${
            activeState === "ScoreBoard" ? styles.active : ""
          }`}
          onClick={() => setActiveState("ScoreBoard")}
        >
          ScoreBoard
        </div>
      </div>

      {activeState === "Evaluation" && <EvaluationCriteria />}
      {activeState === "Comments" && <Comments />}
      {activeState === "ScoreBoard" && <ScoreBoard />}
    </>
  );
}

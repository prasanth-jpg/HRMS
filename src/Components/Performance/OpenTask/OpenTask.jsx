import React, { useState, useEffect } from "react";
import styles from "./OpenTask.module.css";
 import rightmark from "../../../assets/rightmark.png";
import filtergray from "../../../assets/filter_gray.png";

const OpenTask = () => {
  const [buttons, setButtons] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  useEffect(() => {
    setButtons("All");
  }, []);

  const activeButton = (act) => {
    setButtons(act);

    if (act === "All") {
      setIsModalOpen(true);
    }
  };

  const saveGoal = () => {
    if (goal.trim() === "") return;

    setGoalsList([...goalsList, goal]);
    setGoal("");
    setIsModalOpen(false);
  };

  return (
    <div className={styles.OpenTaskContainer}>
      <div className={styles.OpenTask}>
        <div className={styles.OpenTaskdiv}>
          <img src={rightmark} alt="icon" />
          <div>Open Tasks</div>
        </div>

        <div className={styles.buttonsdiv}>
          <div
            className={`${styles.buttons} ${
              buttons === "All" ? styles.activebtn : ""
            }`}
            onClick={() => activeButton("All")}
          >
            ALL-1
          </div>

          <div
            className={`${styles.buttons} ${
              buttons === "OVERDUE" ? styles.activebtn : ""
            }`}
            onClick={() => activeButton("OVERDUE")}
          >
            OVERDUE
          </div>

          <div
            className={`${styles.buttons} ${
              buttons === "TIMES" ? styles.activebtn : ""
            }`}
            onClick={() => activeButton("TIMES")}
          >
            DUE TIMES WEEK-10
          </div>

          <div
            className={`${styles.filtergray} ${
              buttons === "filter" ? styles.activebtn : ""
            }`}
            onClick={() => activeButton("filter")}
          >
            <img className={styles.filtergrayimg} src={filtergray} alt="filtergray" />
          </div>
        </div>
      </div>

      <div
        className={styles.label}
        onClick={() => buttons === "All" && setIsModalOpen(true)}
      >
        {buttons === "All"
          ? ": Add Goals Key Result Areas to Goal Plan"
          : buttons}
      </div>

      {/* Goals List */}
      {goalsList.length > 0 && (
        <div className={styles.goalsList}>
          <h4>Added Goals</h4>
          <ul>
            {goalsList.map((g, index) => (
              <li key={index}>{g}</li>
            ))}
          </ul>
        </div>
      )}

      {/* MODAL */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Add Goal</h3>

            <input
              type="text"
              placeholder="Enter goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className={styles.input}
            />

            <div className={styles.modalActions}>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
              <button className={styles.saveBtn} onClick={saveGoal}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OpenTask;

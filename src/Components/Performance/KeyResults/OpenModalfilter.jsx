import React, { useState } from "react";
import styles from "./CreateGoalModal.module.css";

const OpenModalfilter = ({ onClose }) => {
  const [goalName, setGoalName] = useState("");
  const [status, setStatus] = useState("In Progress");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleSave = () => {
    console.log({
      goalName,
      status,
      start,
      end,
    });
    onClose();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Setting</h3>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.field}>
            <label>Goal / KRA Name</label>
            <input
              type="text"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              placeholder="Enter goal name"
            />
          </div>

          <div className={styles.field}>
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>In Progress</option>
              <option>Not Started</option>
              <option>Completed</option>
            </select>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label>Start Date</label>
              <input
                type="date"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label>End Date</label>
              <input
                type="date"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.secondaryBtn} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.primaryBtn} onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenModalfilter;

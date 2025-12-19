import React from "react";
import styles from "./IndividualFeedBackTab.module.css";

export default function Comments() {
  return (
    <div className={styles.section}>
      <h3>Interviewer Comments</h3>

      <div className={styles.commentBox}>
        <p>
          Candidate has strong technical fundamentals and problem-solving
          skills. Communication is clear, but can improve in explaining
          approach in detail.
        </p>
      </div>
    </div>
  );
}

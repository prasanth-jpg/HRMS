import React from "react";
import styles from "./IndividualFeedBackTab.module.css";

export default function EvaluationCriteria() {
  const criteria = [
    { name: "Technical Skills", score: 4 },
    { name: "Communication Skills", score: 3 },
    { name: "Problem Solving", score: 5 },
    { name: "Cultural Fit", score: 4 },
  ];

  return (
    <div className={styles.section}>
      <h3>Evaluation Criteria</h3>

      {criteria.map((item, index) => (
        <div key={index} className={styles.criteriaRow}>
          <span>{item.name}</span>
          <span className={styles.score}>{item.score} / 5</span>
        </div>
      ))}
    </div>
  );
}

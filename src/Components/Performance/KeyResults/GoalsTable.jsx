import React from "react";
import styles from "./GoalsTable.module.css";
import more from "../../../assets/more.png";

const goals = [
  {
    name: "Stakeholder Management & Satisfaction",
    status: "In Progress",
    start: "01-01-2025",
    end: "31-12-2025",
  },
  {
    name: "Efficiency",
    status: "In Progress",
    start: "01-01-2025",
    end: "31-12-2025",
  },
  {
    name: "Quality & Delivery Excellence",
    status: "In Progress",
    start: "01-01-2025",
    end: "31-12-2025",
  },
  {
    name: "Process Efficiency & Automation",
    status: "In Progress",
    start: "01-01-2025",
    end: "31-12-2025",
  },
  {
    name: "Team Development & Engagement",
    status: "In Progress",
    start: "01-01-2025",
    end: "31-12-2025",
  },
];

const GoalsTable = ({ searchTerm = "", filterList, filtershow}) => {
  const q = searchTerm.toLowerCase().trim();

  let filteredGoals = goals
    .filter(goal => goal.name.toLowerCase().includes(q))

  if(filterList){
      filteredGoals=[...filteredGoals].sort((a,b)=>a.name.localeCompare(b.name))
  }
  
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Goals / Key Result Areas Name</th>
          <th>Status</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {filteredGoals.length > 0 ? (
          filteredGoals.map((goal, i) => (
            <tr key={i}>
              <td className={styles.name}>
                <div>{goal.name}</div>
                <div>
                  <img src={more} alt="more" />
                </div>
              </td>
              <td>
                <span className={styles.status}>{goal.status}</span>
              </td>
              <td>{goal.start}</td>
              <td>{goal.end}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4} style={{ textAlign: "center", padding: "16px" }}>
              No matching goals found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default GoalsTable;

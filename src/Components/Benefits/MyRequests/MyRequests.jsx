import React from "react";
import styles from "./MyRequests.module.css";
import searchimg from "../../../assets/searchimg.png";

export default function MyRequests() {
  return (
    <div className={styles.MyRequestsContainerdiv}>
      <div className={styles.MyRequestsContainer}>
        <div className={styles.MyRequests}>
          <p>My Requests for FY25-26</p>
        </div>
        <div className={styles.Clamedon}>
          <div className={styles.Clamedontxt}>
            <p>
              <span>Claimed</span>
              <span>on:</span>
            </p>
            <select>
              <option>2025-10</option>
              <option onClick={()=>alert("2025-20 Not yet available")}>2025-20</option>
              <option onClick={()=>alert("2025-30 Not yet available")}>2025-30</option>
            </select>
          </div>
          <div className={styles.Clamedontxt1}>
            <p>Status:</p>
            <select>
              <option>Pending</option>
              <option>Approve</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.tableExpense}>
        <table>
          <thead>
            <tr>
              <th>Expense Date</th>
              <th>Claim Date</th>
              <th>Invoice Number</th>
              <th>Expense Type</th>
              <th>User Description</th>
              <th>Current</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className={styles.tableExpenseimg}>
        <img src={searchimg} alt="no records" />
        <p>There are no records to display</p>
      </div>
    </div>
  );
}

import React, { useState } from 'react'
import styles from "./LeaveBalance.module.css"
import Clippathgroup from "../../../assets/Clippathgroup.png";
import unpaidLeave from "../../../assets/unpaidemoji.png"

const LeaveBalance = () => {

  const [showModal, setShowModal] = useState(false);

  const leaveBalance = [
    { count: 1, leave: "Comp off" },
    { count: 6, leave: "Casual Leave" },
    { count: 5, leave: "Earned Leave" },
    { count: 5, leave: "Sick Leave" },
    { img: unpaidLeave, leave: "Loss of Pay" }
  ];

  return (
   <div className={styles.LeaveBalance}>
     <div className={styles.card}>
      <h2>Leave Balances</h2>
      <button onClick={() => setShowModal(true)}>View All</button>
     </div>

     <div className={styles.LeaveBalancecards}>
       {leaveBalance.map((leaves, index) => (
        <div key={index} className={styles.balanceitems}>
          <div className={styles.count}>
            {leaves.count ? leaves.count : <img src={leaves.img} alt="leave-icon" />}
          </div>
          <div className={styles.leave}>{leaves.leave}</div>
        </div>
       ))}
     </div>


     {showModal && (
      <div className={styles.modalOverlay}>
        <div className={styles.modalCard}>
          <h3>All Leave Types</h3>

          <ul className={styles.modalList}>
            {leaveBalance.map((leave, index) => (
              <li key={index}>
                {leave.leave} — {leave.count ? leave.count : "N/A"}
              </li>
            ))}
          </ul>

          <button className={styles.closeBtn} onClick={() => setShowModal(false)}>
            Close
          </button>
        </div>
      </div>
     )}
   </div>
  );
};

export default LeaveBalance;

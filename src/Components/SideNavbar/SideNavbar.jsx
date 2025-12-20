import React, { useState } from "react";
import styles from "./SideNavbar.module.css";
import profile from "../../assets/profile.png";
import Employee_life_cycle from "../../assets/Employee_life_cycle.png";
import compensation from "../../assets/compensation.png";
import benifits1 from "../../assets/benifits1.png";
import attendance1 from "../../assets/attendance1.png";
import performance2 from "../../assets/performance2.png";
import chevronRight from "../../assets/chevronRight.png";
import travel from "../../assets/travel.png";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [activeSub, setActiveSub] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => {
      const isClosing = prev === menu;

      if (!isClosing) {
        if (menu === "Profile") setActiveSub("Overview");
        if (menu === "Flow") setActiveSub("flowRequest");
        if (menu === "TimeAndAttendance") setActiveSub("overview");
        if (menu === "Performance") setActiveSub("overview");
        if (menu === "Reimbursement") setActiveSub("overview");
      }

      return isClosing ? "" : menu;
    });
  };

  const name = "Gandrath Pranitha";
  const initial = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.userDetails}>
          <div className={styles.logoCircle}>{initial}</div>
          <div className={styles.details}>
            <h2>{name}</h2>
            <p>Arin930</p>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>

      <div className={styles.lineparent}>
        <div className={styles.line} />
      </div>

      <ul className={styles.Menu}>
        <li className={styles.chevronRightDivContainer}>
          <div
            className={`${styles.chevronRightDiv} ${openMenu === "Profile" ? styles.avtiveTab : ""
              }`}
            onClick={() => toggleMenu("Profile")}
          >
            <div className={styles.chevronRightDivimg}>
              <img src={profile} alt="" />
              <span>Profile</span>
            </div>
            <img className={styles.chevronRight} src={chevronRight} alt="" />
          </div>

          {openMenu === "Profile" && (
            <ul className={styles.extraUiShow}>
              <Link
                to="/Profile/Overview"
                className={activeSub === "Overview" ? styles.activeSub : ""}
                onClick={() => setActiveSub("Overview")}
              >
                Overview
              </Link>
              <Link
                to="/Profile/PersonalDetails"
                className={activeSub === "PersonalDetails" ? styles.activeSub : ""}
                onClick={() => setActiveSub("PersonalDetails")}
              >
                Personal Details
              </Link>
              <Link
                to="/Profile/EmploymentDetails"
                className={activeSub === "EmploymentDetails" ? styles.activeSub : ""}
                onClick={() => setActiveSub("EmploymentDetails")}
              >
                Employment Details
              </Link>
              <Link
                to="/Profile/Documents"
                className={activeSub === "Documents" ? styles.activeSub : ""}
                onClick={() => setActiveSub("Documents")}
              >
                Documents
              </Link>
            </ul>
          )}
        </li>

        <li className={styles.chevronRightDivContainer}>
          <div
            className={`${styles.chevronRightDiv} ${openMenu === "Flow" ? styles.avtiveTab : ""
              }`}
            onClick={() => toggleMenu("Flow")}
          >
            <div className={styles.chevronRightDivimg}>
              <img src={Employee_life_cycle} alt="" />
              <span>Flow</span>
            </div>
            <img className={styles.chevronRight} src={chevronRight} alt="" />
          </div>

          {openMenu === "Flow" && (
            <ul className={styles.extraUiShow}>
              <Link
                to="/Flow/flowRequest"
                className={activeSub === "flowRequest" ? styles.activeSub : ""}
                onClick={() => setActiveSub("flowRequest")}
              >
                Flow Request
              </Link>
              <Link
                to="/Flow/Confirmation"
                className={activeSub === "Confirmation" ? styles.activeSub : ""}
                onClick={() => setActiveSub("Confirmation")}
              >
                Confirmation
              </Link>
              <Link
                to="/Flow/Separation"
                className={activeSub === "Separation" ? styles.activeSub : ""}
                onClick={() => setActiveSub("Separation")}
              >
                Separation
              </Link>
            </ul>
          )}
        </li>

        <Link to="/Compensation" className={`${styles.chevronRightDiv} ${openMenu === "Compensation" ? styles.avtiveTab : ""
          }`} onClick={() => toggleMenu("Compensation")}
        >
          <div className={styles.chevronRightDivimg}>
            <img src={compensation} alt="" />
            <span>Compensation</span>
          </div>
          <img alt="" />

        </Link>

        <Link to="/Benefits" className={`${styles.chevronRightDiv} ${openMenu === "Benefits" ? styles.avtiveTab : ""
          }`} onClick={() => toggleMenu("Benefits")}>
          <div className={styles.chevronRightDivimg}>
            <img src={benifits1} alt="" />
            <span>Benefits</span>
          </div>
          <img alt="" />

        </Link>

        <li className={styles.chevronRightDivContainer}>
          <div
            className={`${styles.chevronRightDiv} ${openMenu === "TimeAndAttendance" ? styles.avtiveTab : ""
              }`}
            onClick={() => toggleMenu("TimeAndAttendance")}
          >
            <div className={styles.chevronRightDivimg}>
              <img src={attendance1} alt="" />
              <span>Time & Attendance</span>
            </div>
            <img className={styles.chevronRight} src={chevronRight} alt="" />
          </div>

          {openMenu === "TimeAndAttendance" && (
            <ul className={styles.extraUiShow}>
              <Link
                to="/Attendance/overview"
                className={activeSub === "overview" ? styles.activeSub : ""}
                onClick={() => setActiveSub("overview")}
              >
                Overview
              </Link>
              <Link
                to="/Attendance/attendence"
                className={activeSub === "attendance" ? styles.activeSub : ""}
                onClick={() => setActiveSub("attendance")}
              >
                Attendance
              </Link>
              <Link
                to="/Attendance/leave"
                className={activeSub === "leave" ? styles.activeSub : ""}
                onClick={() => setActiveSub("leave")}
              >
                Leave
              </Link>
            </ul>
          )}
        </li>

        <li className={styles.chevronRightDivContainer}>
          <div
            className={`${styles.chevronRightDiv} ${openMenu === "Performance" ? styles.avtiveTab : ""
              }`}
            onClick={() => toggleMenu("Performance")}
          >
            <div className={styles.chevronRightDivimg}>
              <img src={performance2} alt="" />
              <span>Performance</span>
            </div>
            <img className={styles.chevronRight} src={chevronRight} alt="" />
          </div>

          {openMenu === "Performance" && (
            <ul className={styles.extraUiShow}>
              <Link to="/Performance/overview" className={activeSub === "overview" ? styles.activeSub : ""} onClick={() => setActiveSub("overview")}>Overview</Link>
              <Link to="/Performance/myGoal" className={activeSub === "GoalsPlan" ? styles.activeSub : ""} onClick={() => setActiveSub("GoalsPlan")}>Goals Plan</Link>
              <Link to="/Performance/keyResults" className={activeSub === "keyResults" ? styles.activeSub : ""} onClick={() => setActiveSub("keyResults")}>Key Results</Link>
              <Link to="/Performance/Review" className={activeSub === "Review" ? styles.activeSub : ""} onClick={() => setActiveSub("Review")}>Review</Link>
              <Link to="/Performance/MSF" className={activeSub === "MSF" ? styles.activeSub : ""} onClick={() => setActiveSub("MSF")}>MSF</Link>
              <Link to="/Performance/Feedback" className={activeSub === "Feedback" ? styles.activeSub : ""} onClick={() => setActiveSub("Feedback")}>Feedback</Link>
              <Link to="/Performance/Assessment" className={activeSub === "Assessment" ? styles.activeSub : ""} onClick={() => setActiveSub("Assessment")}>Assessment History</Link>
              <Link to="/Performance/MSFHistory" className={activeSub === "MSFHistory" ? styles.activeSub : ""} onClick={() => setActiveSub("MSFHistory")}>MSF History</Link>
            </ul>
          )}
        </li>

        <li className={styles.chevronRightDivContainer}>
          <div
            className={`${styles.chevronRightDiv} ${openMenu === "Reimbursement" ? styles.avtiveTab : ""
              }`}
            onClick={() => toggleMenu("Reimbursement")}
          >
            <div className={styles.chevronRightDivimg}>
              <img src={travel} alt="" />
              <span>Reimbursement</span>
            </div>
            <img className={styles.chevronRight} src={chevronRight} alt="" />
          </div>

          {openMenu === "Reimbursement" && (
            <ul className={styles.extraUiShow}>
              <Link to="/Reimbursement/overview" className={activeSub === "overview" ? styles.activeSub : ""} onClick={() => setActiveSub("overview")}>Overview</Link>
              <Link to="/Reimbursement/Reimbursement" className={activeSub === "Reimbursement" ? styles.activeSub : ""} onClick={() => setActiveSub("Reimbursement")}>Reimbursement</Link>
              <Link to="/Reimbursement/Advances" className={activeSub === "Advances" ? styles.activeSub : ""} onClick={() => setActiveSub("Advances")}>Advances</Link>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;

import React, { useEffect, useState } from "react";
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
  const [showExtra, SetShowExtra] = useState("");
  const [showExtraBl, SetShowExtraBl] = useState(false);
  const [active, setActive] = useState("");

  const showExtraFn = (extra) => {
    SetShowExtra(extra);
    SetShowExtraBl((prev) => !prev);
  };
  const showExtrnSubfn = (sub) => {
    setActive(sub);
  };

  useEffect(() => {
    if (showExtra === "TimeAndAttendance") setActive("overview");
  }, [showExtra]);
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.userDetails}>
          <div className={styles.logoCircle}></div>
          <div className={styles.details}>
            <div>
              <h2>Pranitha</h2>
            </div>
            <div>
              <p>Arin930</p>
            </div>
            <div>
              <p>Software Engineer</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineparent}>
        <div className={styles.line}></div>
      </div>
      <ul className={styles.Menu}>
        <Link to="/profile/Overview">
          <div className={styles.chevronRightDivContainer}>
            <div
              className={`${styles.chevronRightDiv} ${
                showExtra === "Profile" ? styles.avtiveTab : ""
              }`}
              onClick={() => showExtraFn("Profile")}
            >
              <div className={styles.chevronRightDivimg}>
                <img src={profile} alt="Profile" />
                <span>Profile</span>
              </div>
              <span className={styles.chevronRight}>
                <img src={chevronRight} alt="chevronRight" />
              </span>
            </div>
            {showExtra === "Profile" && showExtraBl ? (
              <ul
                className={` ${
                  showExtra === "Profile" ? styles.extraUiShow : styles.extraUi
                } `}
              >
                <Link
                  to="/Profile/Overview"
                  onClick={() => showExtrnSubfn("Overview")}
                  className={`${
                    showExtra === "Profile" ? styles.activeSub : ""
                  }`}
                >
                  Overview
                </Link>
                <Link
                  to="/Profile/PersonalDetails"
                  onClick={() => showExtrnSubfn("PersonalDetails")}
                  className={`${
                    active === "PersonalDetails" && showExtra === "Profile"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  Personal Details
                </Link>
                <Link
                  to="/Profile/EmploymentDetails"
                  onClick={() => showExtrnSubfn("EmploymentDetails")}
                  className={`${
                    active === "EmploymentDetails" && showExtra === "Profile"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  Employment Details
                </Link>
                <Link
                  to="/Profile/Documents"
                  onClick={() => showExtrnSubfn("Documents")}
                  className={`${
                    active === "Documents" && showExtra === "Profile"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  Documents
                </Link>
              </ul>
            ) : null}
          </div>
        </Link>
        <Link to="/Flow/flowRequest">
          <div className={styles.chevronRightDivContainer}>
            <div
              className={`${styles.chevronRightDiv} ${
                showExtra === "Flow" ? styles.avtiveTab : ""
              }`}
              onClick={() => showExtraFn("Flow")}
            >
              <div className={styles.chevronRightDivimg}>
                <img src={Employee_life_cycle} alt="Flow" />
                <span>Flow</span>
              </div>
              <span className={styles.chevronRight}>
                <img src={chevronRight} alt="chevronRight" />
              </span>
            </div>
            {showExtra === "Flow" && showExtraBl ? (
              <ul
                className={` ${
                  showExtra === "Flow" ? styles.extraUiShow : styles.extraUi
                } `}
              >
                <Link
                  to="/Flow/flowRequest"
                  onClick={() => showExtrnSubfn("flowRequest")}
                  className={`${
                    active === "flowRequest" && showExtra === "Flow"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  Flow Request
                </Link>
                <Link
                  to="/Flow/Confirmation"
                  onClick={() => showExtrnSubfn("Confirmation")}
                  className={`${
                    active === "Confirmation" && showExtra === "Flow"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  Confirmation
                </Link>
                <Link
                  to="/Flow/Separation"
                  onClick={() => showExtrnSubfn("Separation")}
                  className={`${
                    active === "Separation" && showExtra === "Flow"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  Separation
                </Link>
              </ul>
            ) : null}
          </div>
        </Link>
        <Link to="/Compensation">
          <img src={compensation} alt="compensation" />
          <span>Compensation</span>
        </Link>
        <Link to="/Benefits">
          <img src={benifits1} alt="benifits1" />
          <span>Benefits</span>
        </Link>
        <Link to="/Attendance/overview">
          <div className={styles.chevronRightDivContainer}>
            <div
              className={`${styles.chevronRightDiv} ${
                showExtra === "TimeAndAttendance" ? styles.avtiveTab : ""
              }`}
              onClick={() => showExtraFn("TimeAndAttendance")}
            >
              <div className={styles.chevronRightDivimg}>
                <img src={attendance1} alt="attendance1" />
                <span>Time & Attendance</span>
              </div>
              <span className={styles.chevronRight}>
                <img src={chevronRight} alt="chevronRight" />
              </span>
            </div>
            {showExtra === "TimeAndAttendance" && showExtraBl ? (
              <ul
                className={` ${
                  showExtra === "TimeAndAttendance"
                    ? styles.extraUiShow
                    : styles.extraUi
                } `}
              >
                <Link
                  to="/Attendance/overview"
                  onClick={() => showExtrnSubfn("overview")}
                  className={`${active === "overview" ? styles.activeSub : ""}`}
                >
                  Overview
                </Link>
                <Link
                  to="/Attendance/attendence"
                  onClick={() => showExtrnSubfn("attendance")}
                  className={`${
                    active === "attendance" ? styles.activeSub : ""
                  }`}
                >
                  Attendence
                </Link>
                <Link
                  to="/Attendance/leave"
                  onClick={() => showExtrnSubfn("leave")}
                  className={`${active === "leave" ? styles.activeSub : ""}`}
                >
                  Leave
                </Link>
              </ul>
            ) : null}
          </div>
        </Link>
        <Link to="/Performance/overview">
          <div className={styles.chevronRightDivContainer}>
            <div
              className={`${styles.chevronRightDiv} ${
                showExtra === "Performance" ? styles.avtiveTab : ""
              }`}
              onClick={() => showExtraFn("Performance")}
            >
              <div className={styles.chevronRightDivimg}>
                <img src={performance2} alt="performance2" />
                <span>Performance</span>
              </div>
              <span className={styles.chevronRight}>
                <img src={chevronRight} alt="chevronRight" />
              </span>
            </div>
            {showExtra === "Performance" && showExtraBl ? (
              <ul
                className={` ${
                  showExtra === "Performance"
                    ? styles.extraUiShow
                    : styles.extraUi
                } `}
              >
                <Link
                  to="/Performance/overview"
                  onClick={() => showExtrnSubfn("overview")}
                  className={`${active === "overview" ? styles.activeSub : ""}`}
                >
                  Overview
                </Link>
                <Link
                  to="/Performance/myGoal"
                  onClick={() => showExtrnSubfn("GoalsPlan")}
                  className={`${
                    active === "GoalsPlan" ? styles.activeSub : ""
                  }`}
                >
                  Goals Plan
                </Link>
                <Link
                  to="/Performance/keyResults"
                  onClick={() => showExtrnSubfn("keyResults")}
                  className={`${
                    active === "keyResults" ? styles.activeSub : ""
                  }`}
                >
                  Goals / key Results Area Explorer
                </Link>
                <Link
                  to="/Performance/Review"
                  onClick={() => showExtrnSubfn("Review")}
                  className={`${active === "Review" ? styles.activeSub : ""}`}
                >
                  Review
                </Link>
                <Link
                  to="/Performance/MSF"
                  onClick={() => showExtrnSubfn("MSF")}
                  className={`${active === "MSF" ? styles.activeSub : ""}`}
                >
                  MSF
                </Link>
                <Link
                  to="/Performance/Feedback"
                  onClick={() => showExtrnSubfn("Feedback")}
                  className={`${active === "Feedback" ? styles.activeSub : ""}`}
                >
                  Feedback
                </Link>
                <Link
                  to="/Performance/Assessment"
                  onClick={() => showExtrnSubfn("Assessment")}
                  className={`${
                    active === "Assessment" ? styles.activeSub : ""
                  }`}
                >
                  Assessment History
                </Link>
                <Link
                  to="/Performance/MSFHistory"
                  onClick={() => showExtrnSubfn("MSFHistory")}
                  className={`${
                    active === "MSFHistory" ? styles.activeSub : ""
                  }`}
                >
                  MSF History
                </Link>
              </ul>
            ) : null}
          </div>
        </Link>
        <Link to="/Reimbursement/overview">
          <div className={styles.chevronRightDivContainer}>
            <div
              className={`${styles.chevronRightDiv} ${
                showExtra === "Reimbursement" ? styles.avtiveTab : ""
              }`}
              onClick={() => showExtraFn("Reimbursement")}
            >
              <div className={styles.chevronRightDivimg}>
                <img src={travel} alt="Reimbursement" />
                <span>Reimbursement</span>
              </div>
              <span className={styles.chevronRight}>
                <img src={chevronRight} alt="chevronRight" />
              </span>
            </div>
            {showExtra === "Reimbursement" && showExtraBl ? (
              <ul
                className={` ${
                  showExtra === "Reimbursement"
                    ? styles.extraUiShow
                    : styles.extraUi
                } `}
              >
                <Link
                  to="/Reimbursement/overview"
                  onClick={() => showExtrnSubfn("overview")}
                  className={`${
                    active === "overview" && showExtra === "Reimbursement"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  Overview
                </Link>
                <Link
                  to="/Reimbursement/Reimbursement"
                  onClick={() => showExtrnSubfn("Reimbursement")}
                  className={`${
                    active === "Reimbursement" && showExtra === "Reimbursement"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  Reimbursement
                </Link>
                <Link
                  to="/Reimbursement/Advances"
                  onClick={() => showExtrnSubfn("Advances")}
                  className={`${active === "Advances" ? styles.activeSub : ""}`}
                >
                  Advances
                </Link>
              </ul>
            ) : null}
          </div>
        </Link>
        <Link to="/Interviews">
          <div className={styles.chevronRightDivContainer}>
            <div
              className={`${styles.chevronRightDiv} ${
                showExtra === "Interviews" ? styles.avtiveTab : ""
              }`}
              onClick={() => showExtraFn("Interviews")}
            >
              <div className={styles.chevronRightDivimg}>
                <img src={travel} alt="Interviews" />
                <span>Interviews</span>
              </div>
              <span className={styles.chevronRight}>
                <img src={chevronRight} alt="chevronRight" />
              </span>
            </div>
            {showExtra === "Interviews" && showExtraBl ? (
              <ul
                className={` ${
                  showExtra === "Interviews"
                    ? styles.extraUiShow
                    : styles.extraUi
                } `}
              >
                <Link
                  to="/Interviews"
                  onClick={() => showExtrnSubfn("Interviews")}
                  className={`${
                    active === "Interviews" && showExtra === "Interviews"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  individual FeedBack
                </Link>
                <Link
                  to="/Interviews/candidate"
                  onClick={() => showExtrnSubfn("candidate")}
                  className={`${
                    active === "candidate" && showExtra === "candidate"
                      ? styles.activeSub
                      : ""
                  }`}
                >
                  candidate
                </Link>
              </ul>
            ) : null}
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default SideNavbar;

import React, { useState } from "react";
import styles from "./Interviews.module.css";
import weekoff from "../../assets/weekoff.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Interviews() {
  const [activeTab, setActiveTab] = useState("important");

  const [showdiv, setShowdiv] = useState(null);

  const data = [
    {
      interviewbtn: true,
      days: "2 days ago",
      deatils: "Interview candidate details",
    },
    {
      interviewbtn: true,
      days: "2 days ago",
      deatils: "Interview candidate details",
    },
    {
      interviewbtn: true,
      days: "2 days ago",
      deatils: "Interview candidate details",
    },
    {
      interviewbtn: true,
      days: "2 days ago",
      deatils: "Interview candidate details",
    },
    {
      interviewbtn: true,
      days: "2 days ago",
      deatils: "Interview candidate details",
    },
    {
      interviewbtn: true,
      days: "2 days ago",
      deatils: "Interview candidate details",
    },
    {
      interviewbtn: true,
      days: "2 days ago",
      deatils: "Interview candidate details",
    },
    {
      interviewbtn: true,
      days: "2 days ago",
      deatils: "Interview candidate details",
    },
  ];

  const activeTabFn = (tab) => {
    setActiveTab(tab);
    if (tab === "update") {
      setShowdiv(null);
    }
  };

  const showdivfn = (_s, index) => {
    setShowdiv(index);
  };
  return (
    <>
      <div className={styles.InterviewsContainer}>
        <div className={styles.InterviewsTabContent}>
          <div className={styles.InterviewsTab}>
            <div
              className={`${styles.tab} ${
                activeTab === "important" ? styles.active : ""
              }`}
              onClick={() => activeTabFn("important")}
            >
              Important (9)
            </div>
            <div
              className={`${styles.tab} ${
                activeTab === "update" ? styles.active : ""
              }`}
              onClick={() => activeTabFn("update")}
            >
              Update (0)
            </div>
          </div>
          <div className={styles.diver}></div>
          {activeTab === "important" && (
            <div className={styles.InterviewsTabBelow}>
              {data.map((dtls, i) => (
                <div
                  className={styles.InterviewsTabBelowdetls}
                  onClick={() => {
                    showdivfn(true, i);
                  }}
                >
                  <div className={styles.InterviewsTabBelowdetlsone}>
                    <div className={styles.InterviewsTabBelowdetlsbtn}>
                      {dtls.interviewbtn ? (
                        <Button sx={{ color: "#787878ff" }}>
                          {" "}
                          <img src={weekoff} alt="weekoff"></img> Interviews
                        </Button>
                      ) : null}
                    </div>
                    <div className={styles.InterviewsTabBelowdetlsday}>
                      {dtls.days}
                    </div>
                  </div>
                  <div className={styles.InterviewsTabBelowdetlsful}>
                    {dtls.deatils}
                  </div>
                  <div className={styles.diver}></div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "update" && (
            <div className={styles.updateDivborders}>
              <div className={styles.updateDiv}>
                <p>Updating the Interview</p>
              </div>
              <div className={styles.updateDiv}>
                <p>Updating the Interview</p>
              </div>
              <div className={styles.updateDiv}>
                <p>Updating the Interview</p>
              </div>
              <div className={styles.updateDiv}>
                <p>Updating the Interview</p>
              </div>
              <div className={styles.updateDiv}>
                <p>Updating the Interview</p>
              </div>
              <div className={styles.updateDiv}>
                <p>Updating the Interview</p>
              </div>
              <div className={styles.updateDiv}>
                <p>Updating the Interview</p>
              </div>
              <div className={styles.updateDiv}>
                <p>Updating the Interview</p>
              </div>
            </div>
          )}
        </div>
        {activeTab === "important" && showdiv !== null && (
          <div className={styles.content}>
            <div className={styles.infodiv}>
              <div>Candidate Information {showdiv}</div>
              <div className={styles.formdiv}>
                <div className={styles.namediv}>
                  <input type="text" placeholder="First Name"></input>
                  <input type="text" placeholder="Last Name"></input>
                </div>
                <div className={styles.namediv}>
                  <input type="text" placeholder="Middle Name"></input>
                  <input type="email" placeholder="email id"></input>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

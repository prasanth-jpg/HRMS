import React, { useState } from "react";
import styles from "./FeedbackPage.module.css";
import summaryempty from "../../../assets/summaryempty.png";
import RequestFeedBack from "../KeyResults/RequestFeedBack/RequestFeedBack";
import ReqModal from "../KeyResults/RequestFeedBack/ReqModal/ReqModal";

import ResponsesTab from "./ResponsesTab";
import ContributionsTab from "./ContributionsTab";

const FeedbackPage = () => {
  const stats = [
    { label: "Received", value: "00" },
    { label: "Pending with you", value: "00" },
    { label: "Pending with others", value: "00" },
    { label: "Given", value: "00" },
  ];

  const [showRF, setShowRF] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [activeTab, setActiveTab] = useState("summary");
  return (
    <div className={styles.container}>
      {showRF ? (
        <RequestFeedBack />
      ) : (
        <div className={styles.containerChild}>
          <header className={styles.header}>
            <h1>Feedback</h1>

            <div className={styles.tabs}>
              <span
                className={activeTab === "summary" ? styles.active : ""}
                onClick={() => setActiveTab("summary")}
              >
                Summary
              </span>
              <span
                className={activeTab === "responses" ? styles.active : ""}
                onClick={() => setActiveTab("responses")}
              >
                Responses
              </span>
              <span
                className={activeTab === "contributions" ? styles.active : ""}
                onClick={() => setActiveTab("contributions")}
              >
                Contributions
              </span>
            </div>

            <button
              className={styles.requestBtn}
              onClick={() => {
                setIsOpenModal(true);
              }}
            >
              Request Feedback ▾
            </button>
          </header>

          {/* ---------- SUMMARY TAB CONTENT ---------- */}
          {activeTab === "summary" && (
            <>
              <section className={styles.statsSection}>
                {stats.map((item, idx) => (
                  <div key={idx} className={styles.statCard}>
                    <h2>{item.value}</h2>
                    <p>{item.label}</p>
                  </div>
                ))}
              </section>

              <section className={styles.contentSection}>
                <h3>Goals / Key Result Areas</h3>
                <div className={styles.emptyState}>
                  <img src={summaryempty} alt="Empty" />
                  <p className={styles.title}>
                    Not enough Feedback to draw insights!
                  </p>
                  <p className={styles.subtitle}>
                    Insights related to the Feedback you have received will
                    appear here once you’ve gathered a sufficient number of
                    responses.
                  </p>
                  <button
                    className={styles.outlineBtn}
                    onClick={() => setShowRF(true)}
                  >
                    Request Feedback Now
                  </button>
                </div>
              </section>
            </>
          )}

          {/* ---------- RESPONSES TAB CONTENT ---------- */}
          {activeTab === "responses" && <ResponsesTab />}

          {/* ---------- CONTRIBUTIONS TAB CONTENT ---------- */}
          {activeTab === "contributions" && <ContributionsTab />}
        </div>
      )}

      {isOpenModal && (
        <ReqModal
          isOpen={isOpenModal}
          onClose={() => setIsOpenModal(false)}
        />
      )}
    </div>
  );
};

export default FeedbackPage;

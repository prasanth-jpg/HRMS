import React, { useEffect, useState } from "react";
import styles from "./SmartSuggestions.module.css";
import smartsuggestions from "../../../assets/smartsuggestions.png";
import { Button } from "@mui/material";

const SmartSuggestions = () => {
  const [currentPage, setCurrentpage] = useState(1);
  const [page, setPage] = useState(null);

  const [showActionModal, setShowActionModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const data = [
    {
      id: 1,
      image: smartsuggestions,
      title: "Smart Suggestions",
      feedback: "Feedback",
      feedbackmsge:
        "You have not given Feedback to anyone in the last 30 days, would you like to give Feedback to someone today?",
      action: "ACT",
    },
    {
      id: 2,
      image: smartsuggestions,
      title: "Smart Suggestions",
      feedback: "Feedback",
      feedbackmsge:
        "You have not received Feedback in the last 30 days, would you like to request Feedback from someone today?",
      action: "ACT",
    },
    {
      id: 3,
      image: smartsuggestions,
      title: "Smart Suggestions",
      feedback: "Notes",
      feedbackmsge:
        "You have not registered any Notes in the last 30 days, would you like to register a note today?",
      action: "ACT",
    },
  ];

  useEffect(() => {
    const filtereddata = data.filter((item) => item.id === currentPage);
    setPage(filtereddata);
  }, [currentPage]);

  const prevbtn = () => {
    setCurrentpage((prev) => prev - 1);
  };

  const nextbtn = () => {
    setCurrentpage((prev) => prev + 1);
  };

  const handleActClick = (card) => {
    setSelectedCard(card);
    setShowActionModal(true);
  };

  const handleActionConfirm = () => {
    alert(`Action started for: ${selectedCard?.feedback || "Suggestion"}`);
    setShowActionModal(false);
  };

  return (
    <div className={styles.Parent}>
      {page?.map((value) => (
        <div key={value.id} className={styles.SmartSuggestionsContainer}>
          <div className={styles.SmartSuggestions}>
            <div>
              <img src={value.image} alt="smart" />
            </div>
            <div className={styles.SuggestionsTitle}>{value.title}</div>
          </div>

          <div className={styles.SuggestionsFeedback}>
            <div className={styles.Feedback}>{value.feedback}</div>
            <div>{value.feedbackmsge}</div>
          </div>

          <div className={styles.SuggestionsToday}>
            <div>{value.day}</div>
            <div>
              <Button
                variant="outlined"
                className={styles.ACt}
                onClick={() => handleActClick(value)}
              >
                {value.action}
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.pagination}>
        <div className={styles.paginationleft}>
          <div>{currentPage}/3</div>
        </div>
        <div className={styles.paginationright}>
          <div
            className={styles.paginationarrow}
            onClick={prevbtn}
            style={{
              pointerEvents: currentPage === 1 ? "none" : "auto",
              opacity: currentPage === 1 ? 0.5 : 1,
            }}
          >
            &lt;
          </div>
          <div
            className={styles.paginationarrow}
            onClick={nextbtn}
            style={{
              pointerEvents: currentPage === 3 ? "none" : "auto",
              opacity: currentPage === 3 ? 0.5 : 1,
            }}
          >
            &gt;
          </div>
        </div>
      </div>

      {showActionModal && selectedCard && (
        <div className={styles.actionOverlay}>
          <div className={styles.actionModal}>
            <h3>{selectedCard.title}</h3>
            <p>{selectedCard.feedbackmsge}</p>

            <div className={styles.actionButtons}>
              <Button onClick={() => setShowActionModal(false)}>Cancel</Button>
              <Button variant="contained" onClick={handleActionConfirm}>
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartSuggestions;

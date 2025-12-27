import React, { useEffect, useState } from "react";
import styles from "./RequestFeedBack.module.css";
import { Switch, FormControlLabel, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import OverallRemark from "../OverallRemark/OverallRemark";

export default function RequestFeedBack() {
  const [questionsInput, setQuestionsInput] = useState(false);
  const [questionsText, setQuestionsText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [activeQns, setActiveQns] = useState("Questions");
  const [selected, setSelected] = useState([]);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    setActiveQns("Questions");
  }, []);

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(() => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 1,
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#007bff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      width: 24,
      height: 24,
    },
    "& .MuiSwitch-track": {
      borderRadius: 13,
      backgroundColor: "#d3d6da",
    },
  }));

  const goals = [
    "Stakeholder Management & Satisfaction",
    "Efficiency",
    "Quality & Delivery Excellence",
    "Process Efficiency & Automation",
    "Team Development & Engagement",
    "Innovation & Continuous Improvements",
  ];

  const handleSelectAll = () => {
    if (selected.length === goals.length) {
      setSelected([]);
    } else {
      setSelected(goals);
    }
  };

  const handleSelect = (goal) => {
    setSelected((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };
  const handleCancel= ()=>{
  setSelected("")
  }



  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div
          className={`${styles.sidebarItem} ${
            activeQns === "Overall" ? styles.active : ""
          }`}
          onClick={() => setActiveQns("Overall")}
        >
          Overall Remarks
        </div>

        <div
          className={`${styles.sidebarItem} ${
            activeQns === "Questions" ? styles.active : ""
          }`}
          onClick={() => setActiveQns("Questions")}
        >
          Questions
        </div>

        <div
          className={`${styles.sidebarItem} ${
            activeQns === "Goals" ? styles.active : ""
          }`}
          onClick={() => setActiveQns("Goals")}
        >
          Goals / Key Result Areas
        </div>
      </aside>

      {activeQns === "Questions" && (
        <main className={styles.main}>
          <h2>Questions</h2>

          <Button
            variant="outlined"
            className={styles.addBtn}
            onClick={() => setQuestionsInput(true)}
          >
            + Add Question
          </Button>
          {/* <div className={styles.qnes}>Questions</div>
            <div className={styles.meDiver}></div>
            <div className={styles.addYourown}>
                <Button variant='outlined'>+ Add your own question</Button>
            </div> */}
          {questionsInput && (
            <div className={styles.addBox}>
              <input
                value={questionsText}
                onChange={(e) => setQuestionsText(e.target.value)}
                placeholder="Enter your question"
              />

              <Button
                          variant="outlined"

                onClick={() => {
                  if (!questionsText.trim()) return;
                  setQuestions([...questions, questionsText]);
                  setQuestionsText("");
                  setQuestionsInput(false);
                }}
              >
                Add
              </Button>
            </div>
          )}

          <ul className={styles.list}>
            {questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </main>
      )}

      {activeQns === "Goals" && (
        <main className={styles.main}>
          <h2>Goals / Key Result Areas</h2>

          <div className={styles.goalsCard}>
            <div className={styles.goalsHeader}>
              <h3>Select Applicable Goals</h3>

              <FormControlLabel
                label="Show Values"
                labelPlacement="start"
                control={
                  <IOSSwitch
                    checked={showValues}
                    onChange={(e) => setShowValues(e.target.checked)}
                  />
                }
              />
            </div>

            <div className={styles.checkboxList}>
              <label className={styles.checkboxItem}>
                <input
                  type="checkbox"
                  checked={selected.length === goals.length}
                  onChange={handleSelectAll}
                />
                Select All
              </label>

              {goals.map((goal) => (
                <label key={goal} className={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    checked={selected.includes(goal)}
                    onChange={() => handleSelect(goal)}
                  />
                  <span>{goal}</span>
                </label>
              ))}
            </div>

            {selected.length === 0 && (
              <div className={styles.emptyState}>
                <p>No goals selected yet</p>
                <span>Select goals to include in feedback</span>
              </div>
            )}
          </div>

          <div className={styles.actions}>
            <button className={styles.cancelBtn}  onClick={handleCancel}>Cancel</button>
            <button
              className={styles.submitBtn}
              onClick={() => {
                alert("saved successfully");
              }}
            >
              Save Goals
            </button>
          </div>
        </main>
      )}

      {activeQns === "Overall" && <OverallRemark />}
    </div>
  );
}

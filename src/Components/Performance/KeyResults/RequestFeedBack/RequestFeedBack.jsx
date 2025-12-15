import React, { useEffect, useState } from "react";
import styles from "./RequestFeedBack.module.css";
import { Switch, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import OverallRemark from "../OverallRemark/OverallRemark";

export default function RequestFeedBack() {
  const [questionsInput, setQuestionsInput] = useState(false);
  const [questionsText, setQuestionsText] = useState("");
  const [questions, setQuestions] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [activeQns, setActiveQns] = useState("Questions");
  const [selected, setSelected] = useState([]);
  const [tipIndex, setTipIndex] = useState(0);
  const [showValues, setShowValues] = useState(false);

  useEffect(() => {
    setActiveQns("Questions");
  }, []);

  const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
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
          opacity: 1,
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
      opacity: 1,
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

  const tips = [
    "Reflect on feedback and align with goals",
    "Identify growth areas using feedback",
    "Set actionable improvement goals",
    "Discuss feedback regularly",
  ];

  const toggleShowValues = (e) => {
    setShowValues(e.target.checked);
  };

  const handleSelectAll = () => {
    if (selected.length === goals.length) {
      setSelected([]);
    } else {
      setSelected(goals);
    }
  };

  const handleSelect = (goal) => {
    if (selected.includes(goal)) {
      setSelected(selected.filter((g) => g !== goal));
    } else {
      setSelected([...selected, goal]);
    }
  };

  const handleAddOrUpdate = () => {
    if (!questionsText.trim()) return;

    if (editIndex !== null) {
      const updated = [...questions];
      updated[editIndex] = questionsText;
      setQuestions(updated);
      setEditIndex(null);
    } else {
      setQuestions([...questions, questionsText]);
    }

    setQuestionsText("");
    setQuestionsInput(false);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setQuestionsText(questions[index]);
    setQuestionsInput(true);
  };

  const handleDelete = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

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

        <div className={styles.tipBox}>
          <p>{tips[tipIndex]}</p>
          <div className={styles.dots}>
            {tips.map((_, i) => (
              <span
                key={i}
                className={`${styles.dot} ${
                  i === tipIndex ? styles.activeDot : ""
                }`}
                onClick={() => setTipIndex(i)}
              />
            ))}
          </div>
        </div>
      </aside>

      {activeQns === "Questions" && (
        <main className={styles.main}>
          <h2>Request Feedback</h2>

          <section className={styles.section}>
            <h3>Questions</h3>

            <button
              className={styles.addBtn}
              onClick={() => {
                setQuestionsInput(true);
                setEditIndex(null);
                setQuestionsText("");
              }}
            >
              + Add your own question
            </button>

            {questionsInput && (
              <div className={styles.addQuestionBox}>
                <input
                  type="text"
                  placeholder="Enter your question"
                  value={questionsText}
                  onChange={(e) => setQuestionsText(e.target.value)}
                />
                <button onClick={handleAddOrUpdate}>
                  {editIndex !== null ? "Update" : "Add"}
                </button>
              </div>
            )}

            <ul className={styles.questionList}>
              {questions.map((q, index) => (
                <li key={index} className={styles.questionItem}>
                  <span>{q}</span>
                  <div>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h3>Goals / Key Result Areas</h3>
              <FormControlLabel
                label="Show Values"
                labelPlacement="start"
                control={
                  <IOSSwitch checked={showValues} onChange={toggleShowValues} />
                }
              />
            </div>

            <div className={styles.checkboxList}>
              <label>
                <input
                  type="checkbox"
                  checked={selected.length === goals.length}
                  onChange={handleSelectAll}
                />
                Select All
              </label>

              {goals.map((goal) => (
                <label key={goal}>
                  <input
                    type="checkbox"
                    checked={selected.includes(goal)}
                    onChange={() => handleSelect(goal)}
                  />
                  {goal}
                </label>
              ))}
            </div>
          </section>

          <div className={styles.actions}>
            <button className={styles.cancelBtn}>Cancel</button>
            <button className={styles.submitBtn}>Submit</button>
          </div>
        </main>
      )}

      {activeQns === "Overall" && <OverallRemark />}
    </div>
  );
}

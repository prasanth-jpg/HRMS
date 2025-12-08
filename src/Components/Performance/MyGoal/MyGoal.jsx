import React, { useState } from 'react';
import styles from './MyGoal.module.css';
import keygoal from "../../../assets/keygoal.png";
import OrgGoals from "../../../assets/OrgGoals.png";
import more from "../../../assets/more.png";
import pencile from "../../../assets/pencile.png";
import addicon from "../../../assets/addicon.png";

import { Switch, FormControlLabel, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddGoals from '../../TimeManagemnet/AddGoals/AddGoals';

const MyGoal = () => {
  const [showValues, setShowValues] = useState(false);
  const [isOpenAddGoals, setIsOpenAddGoals] = useState(false);

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
          border: 0,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 24,
      height: 24,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#d3d6da",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const toggleShowValues = (event) => {
    setShowValues(event.target.checked);
    console.log("Show all sub goals:", event.target.checked);
  };

  const handleSubmit = () => {
    alert("Your Goal Plan has been submitted.");
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h1>My Goal Plan</h1>
        </div>

        <div className={styles.waringsubp}>
          <div className={styles.waringsub}>
            <p className={styles.warning}>
              <i className="fa fa-bell" style={{ color: "#aad1e7" }}></i>
              The total Weightage of your Goal Plan is not 100. Please update Weightage and submit.{" "}
              <span>90%</span>
            </p>
            <button
              className={styles.submitButton}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>

        <div className={styles.goalSummary}>
          <div className={styles.goalCount}>
            <span>Total Goals / Key Result Areas</span>
            <h3>
              <span><img src={keygoal} alt="key goals" /></span>8
            </h3>
          </div>
          <div className={styles.subGoalCount}>
            <span>Total Sub Goals</span>
            <h3>
              <span><img src={OrgGoals} alt="org goals" /></span>1
            </h3>
          </div>
        </div>

        <div className={styles.showAllSubGoals}>
          <div className={styles.showAllSubGoalstoggle}>
            <FormControlLabel
              labelPlacement="start"
              control={
                <IOSSwitch
                  checked={showValues}
                  onChange={toggleShowValues}
                />
              }
              sx={{
                marginLeft: "10px",
                color: "#475569",
                fontWeight: 500,
                gap: "8px",
                ".MuiFormControlLabel-label": {
                  fontSize: "0.95rem",
                },
              }}
            />
            <p>Show All Sub Goals</p>
          </div>

          <div className={styles.showAllSubGoalsbtn}>
            <div>Journal</div>
            <div>Add Notes</div>
            <div className={styles.showAllSubGoalsbtndrp}>
              <select className={styles.dropdown}>
                <option className={styles.optionDrop}>Secondary Pill</option>
                <option className={styles.optionDrop}>A-Z</option>
                <option className={styles.optionDrop}>Start Date</option>
                <option className={styles.optionDrop}>End Date</option>
                <option className={styles.optionDrop}>Weightage</option>
              </select>
            </div>
            <div>
              <Button
                variant="contained"
                onClick={() => setIsOpenAddGoals(true)}
              >
                + Add Goals / Keys Request
              </Button>
            </div>
          </div>
        </div>

        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <div className={styles.pillarinpro}>
              <h4>Quality & Delivery Excellence</h4>
              <span className={styles.status}>inProgress</span>
            </div>
            <div className={styles.pillarwei}>
              <p>Weightage</p>
              <p>30%</p>
            </div>
            <div className={styles.pillarweibtn2}>
              <div className={styles.pillarweibtnimg}>
                <img src={addicon} alt="add" />
                <img src={pencile} alt="edit" />
                <img src={more} alt="more" />
              </div>
              <button className={styles.detailsButton}>Show Details</button>
            </div>
          </div>

          <div className={styles.pillar}>
            <div className={styles.pillarinpro}>
              <h4>Process Efficiency & Automation</h4>
              <span className={styles.status}>inProgress</span>
            </div>
            <div className={styles.pillarwei}>
              <p>Weightage</p>
              <p>30%</p>
            </div>
            <div className={styles.pillarweibtn2}>
              <div className={styles.pillarweibtnimg}>
                <img src={addicon} alt="add" />
                <img src={pencile} alt="edit" />
                <img src={more} alt="more" />
              </div>
              <button className={styles.detailsButton}>Show Details</button>
            </div>
          </div>

          <div className={styles.pillar}>
            <div className={styles.pillarinpro}>
              <h4>Team Development & Engagement</h4>
              <span className={styles.status}>inProgress</span>
            </div>
            <div className={styles.pillarwei}>
              <p>Weightage</p>
              <p>30%</p>
            </div>
            <div className={styles.pillarweibtn2}>
              <div className={styles.pillarweibtnimg}>
                <img src={addicon} alt="add" />
                <img src={pencile} alt="edit" />
                <img src={more} alt="more" />
              </div>
              <button className={styles.detailsButton}>Show Details</button>
            </div>
          </div>

          <div className={styles.pillar}>
            <div className={styles.pillarinpro}>
              <h4>Team Development & Engagement</h4>
              <span className={styles.status}>inProgress</span>
            </div>
            <div className={styles.pillarwei}>
              <p>Weightage</p>
              <p>30%</p>
            </div>
            <div className={styles.pillarweibtn2}>
              <div className={styles.pillarweibtnimg}>
                <img src={addicon} alt="add" />
                <img src={pencile} alt="edit" />
                <img src={more} alt="more" />
              </div>
              <button className={styles.detailsButton}>Show Details</button>
            </div>
          </div>
        </div>
      </div>

      <AddGoals
        isOpen={isOpenAddGoals}
        onClose={() => setIsOpenAddGoals(false)}
        title="Attendence Adjustment"
      />
    </div>
  );
};

export default MyGoal;

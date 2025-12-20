import React, { useState } from "react";
import styles from "./MyGoal.module.css";
import keygoal from "../../../assets/keygoal.png";
import OrgGoals from "../../../assets/OrgGoals.png";
import more from "../../../assets/more.png";
import pencile from "../../../assets/pencile.png";
import addicon from "../../../assets/addicon.png";

import { Switch, FormControlLabel, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddGoals from "../../TimeManagemnet/AddGoals/AddGoals";

const MyGoal = () => {
  const [showValues, setShowValues] = useState(false);
  const [isOpenAddGoals, setIsOpenAddGoals] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [openIndexMore, setOpenIndexMore] = useState(null);
  const [openIndexMore1, setOpenIndexMore1] = useState(null);


  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubmit = () => {
    alert("Your Goal Plan has been submitted.");
  };

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
    },
  }));

  const handleEditContent = (index) => {
    console.log(`Editing content for pillar ${index}`);
  };

  const toggleMoreOptions = (index) => {
    setOpenIndexMore((prev) => !prev);
    setOpenIndexMore1(index)
  };

  const handleMarkComplete = (index) => {
    console.log(`Marking pillar ${index} as completed`);
  };

  const handleDeleteGoal = (index) => {
    console.log(`Deleting goal ${index}`);
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
              The total Weightage of your Goal Plan is not 100. Please update
              Weightage and submit. <span>90%</span>
            </p>
            <button className={styles.submitButton} onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>

        <div className={styles.goalSummary}>
          <div className={styles.goalCount}>
            <span>Total Goals / Key Result Areas</span>
            <h3>
              <span>
                <img src={keygoal} alt="key goals" />
              </span>
              8
            </h3>
          </div>
          <div className={styles.subGoalCount}>
            <span>Total Sub Goals</span>
            <h3>
              <span>
                <img src={OrgGoals} alt="org goals" />
              </span>
              1
            </h3>
          </div>
        </div>

        <div className={styles.showAllSubGoals}>
          <div className={styles.showAllSubGoalstoggle}>
            <FormControlLabel
              control={
                <IOSSwitch
                  checked={showValues}
                  onChange={(e) => setShowValues(e.target.checked)}
                />
              }
            />
            <p>Show All Sub Goals</p>
          </div>

          <div className={styles.showAllSubGoalsbtn}>
            <div>Journal</div>
            <div>Add Notes</div>
            <select className={styles.dropdown}>
              <option>Secondary Pill</option>
              <option>A-Z</option>
              <option>Start Date</option>
              <option>End Date</option>
              <option>Weightage</option>
            </select>

            <Button
              variant="contained"
              onClick={() => setIsOpenAddGoals(true)}
            >
              + Add Goals / Keys Request
            </Button>
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
                <img
                  src={addicon}
                  alt="Add Goal"
                  onClick={() => setIsOpenAddGoals(true)}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={pencile}
                  alt="Edit Content"
                  onClick={() => setIsOpenAddGoals(true)}
                  style={{ cursor: 'pointer' }}
                />
                <div className={styles.openmore1more}>
                  <img
                  src={more}
                  alt="More Options"
                  onClick={() => toggleMoreOptions(0)}
                  style={{ cursor: 'pointer' }}
                />
                {openIndexMore && openIndexMore1=== 0 && <div className={styles.openmore}>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={addicon}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Open Goals</p></div>
                  </div>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={pencile}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Edit Goals</p></div>
                  </div>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={more}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Open Goals</p></div>
                  </div>
                </div>}

                </div>
              </div>


              {openIndex === 0 && (
                <div className={styles.moreOptionsBox}>
                  <button onClick={() => handleMarkComplete(0)}>Mark as Completed</button>
                  <button onClick={() => handleDeleteGoal(0)}>Delete Goal</button>
                </div>
              )}

              <button
                className={styles.detailsButton}
                onClick={() => toggleDetails(0)}
              >
                {openIndex === 0 ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>

          {showValues && (
            <div className={styles.subGoals}>
              <p>• Reduce defect leakage</p>
              <p>• Improve code quality</p>
              <p>• Meet sprint timelines</p>
            </div>
          )}

          {openIndex === 0 && (
            <div className={styles.showDetailsContainer}>
              <div className={styles.detailRow}>
                <span>Objective</span>
                <span>Improve delivery quality</span>
              </div>
              <div className={styles.detailRow}>
                <span>Status</span>
                <span>In Progress</span>
              </div>
            </div>
          )}



        </div>
        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <div className={styles.pillarinpro}>
              <h4>Process Efficiency & Automation</h4>
              <span className={styles.status}>inProgress</span>
            </div>

            <div className={styles.pillarwei}>
              <p>Weightage</p>
              <p>20%</p>
            </div>

            <div className={styles.pillarweibtn2}>
              <div className={styles.pillarweibtnimg}>
                <img
                  src={addicon}
                  alt="Add Goal"
                  onClick={() => setIsOpenAddGoals(true)}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={pencile}
                  alt="Edit Content"
                  onClick={() => setIsOpenAddGoals(true)}
                  style={{ cursor: 'pointer' }}
                />
               <div className={styles.openmore1more}>
                  <img
                  src={more}
                  alt="More Options"
                  onClick={() => toggleMoreOptions(1)}
                  style={{ cursor: 'pointer' }}
                />
                {openIndexMore  && openIndexMore1=== 1 && <div className={styles.openmore}>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={addicon}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Open Goals</p></div>
                  </div>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={pencile}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Edit Goals</p></div>
                  </div>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={more}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Open Goals</p></div>
                  </div>
                </div>}

                </div>
              </div>


              {openIndex === 1 && (
                <div className={styles.moreOptionsBox}>
                  <button onClick={() => handleMarkComplete(0)}>Mark as Completed</button>
                  <button onClick={() => handleDeleteGoal(0)}>Delete Goal</button>
                </div>
              )}

              <button
                className={styles.detailsButton}
                onClick={() => toggleDetails(1)}
              >
                {openIndex === 1 ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>

          {showValues && (
            <div className={styles.subGoals}>
              <p>• Reduce defect leakage</p>
              <p>• Improve code quality</p>
              <p>• Meet sprint timelines</p>
            </div>
          )}

          {openIndex === 1 && (
            <div className={styles.showDetailsContainer}>
              <div className={styles.detailRow}>
                <span>Objective</span>
                <span>Improve delivery quality</span>
              </div>
              <div className={styles.detailRow}>
                <span>Status</span>
                <span>In Progress</span>
              </div>
            </div>
          )}



        </div>
        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <div className={styles.pillarinpro}>
              <h4>Team Development & Engagement</h4>
              <span className={styles.status}>inProgress</span>
            </div>

            <div className={styles.pillarwei}>
              <p>Weightage</p>
              <p>40%</p>
            </div>

            <div className={styles.pillarweibtn2}>
              <div className={styles.pillarweibtnimg}>
                <img
                  src={addicon}
                  alt="Add Goal"
                  onClick={() => setIsOpenAddGoals(true)}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={pencile}
                  alt="Edit Content"
                  onClick={() => setIsOpenAddGoals(true)}
                  style={{ cursor: 'pointer' }}
                />
                <div className={styles.openmore1more}>
                  <img
                  src={more}
                  alt="More Options"
                  onClick={() => toggleMoreOptions(2)}
                  style={{ cursor: 'pointer' }}
                />
                {openIndexMore  && openIndexMore1=== 2 && <div className={styles.openmore}>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={addicon}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Open Goals</p></div>
                  </div>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={pencile}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Edit Goals</p></div>
                  </div>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={more}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Open Goals</p></div>
                  </div>
                </div>}

                </div>
              </div>


              {openIndex === 2 && (
                <div className={styles.moreOptionsBox}>
                  <button onClick={() => handleMarkComplete(0)}>Mark as Completed</button>
                  <button onClick={() => handleDeleteGoal(0)}>Delete Goal</button>
                </div>
              )}

              <button
                className={styles.detailsButton}
                onClick={() => toggleDetails(2)}
              >
                {openIndex === 2 ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>

          {showValues && (
            <div className={styles.subGoals}>
              <p>• Reduce defect leakage</p>
              <p>• Improve code quality</p>
              <p>• Meet sprint timelines</p>
            </div>
          )}

          {openIndex === 2 && (
            <div className={styles.showDetailsContainer}>
              <div className={styles.detailRow}>
                <span>Objective</span>
                <span>Improve delivery quality</span>
              </div>
              <div className={styles.detailRow}>
                <span>Status</span>
                <span>In Progress</span>
              </div>
            </div>
          )}



        </div>
        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <div className={styles.pillarinpro}>
              <h4>Innovation & Continuous Improvement</h4>
              <span className={styles.status}>inProgress</span>
            </div>

            <div className={styles.pillarwei}>
              <p>Weightage</p>
              <p>10%</p>
            </div>

            <div className={styles.pillarweibtn2}>
              <div className={styles.pillarweibtnimg}>
                <img
                  src={addicon}
                  alt="Add Goal"
                  onClick={() => setIsOpenAddGoals(true)}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={pencile}
                  alt="Edit Content"
                  onClick={() => setIsOpenAddGoals(true)}
                  style={{ cursor: 'pointer' }}
                />
                <div className={styles.openmore1more}>
                  <img
                  src={more}
                  alt="More Options"
                  onClick={() => toggleMoreOptions(3)}
                  style={{ cursor: 'pointer' }}
                />
                {openIndexMore  && openIndexMore1=== 3 && <div className={styles.openmore}>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={addicon}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Open Goals</p></div>
                  </div>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={pencile}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Edit Goals</p></div>
                  </div>
                  <div className={styles.openmore1}>
                    <div className={styles.openmore2}> <img
                      src={more}
                      alt="Add Goal"
                      onClick={() => setIsOpenAddGoals(true)}
                      style={{ cursor: 'pointer' }}
                    />
                      <p>Open Goals</p></div>
                  </div>
                </div>}

                </div>
              </div>


              {openIndex === 3 && (
                <div className={styles.moreOptionsBox}>
                  <button onClick={() => handleMarkComplete(0)}>Mark as Completed</button>
                  <button onClick={() => handleDeleteGoal(0)}>Delete Goal</button>
                </div>
              )}

              <button
                className={styles.detailsButton}
                onClick={() => toggleDetails(4)}
              >
                {openIndex === 3 ? "Hide Details" : "Show Details"}
              </button>
            </div>
          </div>

          {showValues && (
            <div className={styles.subGoals}>
              <p>• Reduce defect leakage</p>
              <p>• Improve code quality</p>
              <p>• Meet sprint timelines</p>
            </div>
          )}

          {openIndex === 3 && (
            <div className={styles.showDetailsContainer}>
              <div className={styles.detailRow}>
                <span>Objective</span>
                <span>Improve delivery quality</span>
              </div>
              <div className={styles.detailRow}>
                <span>Status</span>
                <span>In Progress</span>
              </div>
            </div>
          )}



        </div>
      </div>

      <AddGoals
        isOpen={isOpenAddGoals}
        onClose={() => setIsOpenAddGoals(false)}
        title="Add Goals"
      />
    </div>
  );
};

export default MyGoal;

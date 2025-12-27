import React, { useState } from "react";
import styles from "./GoalPlan.module.css";
import { Button, Modal, Box, TextField } from "@mui/material";
import keygoal from "../../../assets/keygoal.png";
import right from "../../../assets/right.png";
import clock from "../../../assets/clock.png";
import pause from "../../../assets/pause.png";
import alertircle from "../../../assets/alertircle.png";
import dashcircle from "../../../assets/dashcircle.png";
import notstarted from "../../../assets/notstarted.png";


const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "white",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "24px",
};

export default function GoalPlan() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const statusLabels = [
    {
      name:"Completed",
      img:right
    },
    {
      name:"In Progress",
      img:clock
    },
    {
      name:"On Hold",
      img:pause
    },
    {
      name:"On Rsld",
      img:alertircle
    },
    {
      name:"Delayed",
      img:dashcircle
    },
    {
      name:"Not Satled",
      img:notstarted
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.firstcontainer}>
          <div className={styles.firstcontainerimg}>
            <div className={styles.firstcontainerimg2}>
              <img src={keygoal} alt="Goal Icon" />
            </div>
            <div>
              <p>Goal Plan</p>
            </div>
          </div>

          <div>
            <Button variant="contained" onClick={handleOpen}>
              Update Goal Plan
            </Button>
          </div>
        </div>

        <div className={styles.secondOverview}>
          <div className={styles.secondOverviewcard}>
            <div className={styles.zero}>
              <span>0</span>
            </div>
            <div className={styles.Objectives}>Objectives</div>
          </div>
        </div>

        <div className={styles.ThirdOverview}>
          <p>Goals/keys Result Areas Overview</p>
          <div className={styles.ThirdOverview2}>
            {statusLabels.map((label, i) => (
              <div key={i} className={styles.imgbeniand}>
                <div className={styles.imgbeni}>
                  <div>
                    <img src={label.img} alt={label} />
                  </div>
                  <div className={styles.imgbeni0}>0</div>
                </div>
                <div className={styles.imgbeni0s}>{label.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <h2 style={{ marginBottom: "15px" }}>Update Goal Plan</h2>

          <TextField
            fullWidth
            label="Goal Title"
            variant="outlined"
            margin="dense"
          />

          <TextField
            fullWidth
            label="Description"
            multiline
            rows={3}
            variant="outlined"
            margin="dense"
          />

          <TextField
            fullWidth
            label="Target Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            margin="dense"
          />

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

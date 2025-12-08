import { Button, Modal, Box, TextField, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import styles from "./Overview.module.css";
import ReimbursementSummary from "./ReimbursementSummary/ReimbursementSummary";
import MyTasks from "./MyTasks/MyTasks";
import greenclock from "../../assets/greenclock.png";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "22px",
  boxShadow: 24,
};

export default function OverView() {
  const [openCustomize, setOpenCustomize] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [openNotifications, setOpenNotifications] = useState(false);

  return (
    <>
      <div className={styles.OverallContainer}>
        <div className={styles.OverviewContainerdiv}>
          <div className={styles.OverviewContainer}>
            <div className={styles.OverviewTitle}>Overview</div>
            <div className={styles.summary}>SUMMARY</div>
          </div>

          <div className={styles.OverviewContainerbuttons}>
            <Button variant="outlined" onClick={() => setOpenCustomize(true)}>
              CUSTOMIZE
            </Button>
            <Button variant="outlined" onClick={() => setOpenCreate(true)}>
              CREATE
            </Button>
          </div>
        </div>

        <div className={styles.Reimbursement}>
          <div className={styles.Reimbursementdiv}>
            <div className={styles.ReimbursementTab}>
              <ReimbursementSummary />
            </div>
            <div className={styles.MyTasks}>
              <MyTasks />
            </div>
          </div>

          <div>
            <div className={styles.Notifications}>
              <div className={styles.Notificationsdiv}>
                <div className={styles.imageandtitle}>
                  <img src={greenclock} alt="" />
                  <p>Notifications</p>
                </div>
                <div className={styles.days}>Last 30 days</div>
              </div>

              <div className={styles.viewall}>
                <Button variant="outlined" onClick={() => setOpenNotifications(true)}>
                  VIEW ALL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal open={openCustomize} onClose={() => setOpenCustomize(false)}>
        <Box sx={modalStyle}>
          <h3>Customize Dashboard</h3>

          <FormControlLabel control={<Checkbox />} label="Show Reimbursement Summary" />
          <FormControlLabel control={<Checkbox />} label="Show My Tasks" />
          <FormControlLabel control={<Checkbox />} label="Show Notifications" />

          <div style={{ display: "flex", justifyContent: "end", marginTop: "15px", gap: "10px" }}>
            <Button variant="outlined" onClick={() => setOpenCustomize(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpenCustomize(false)}>Save</Button>
          </div>
        </Box>
      </Modal>

      <Modal open={openCreate} onClose={() => setOpenCreate(false)}>
        <Box sx={modalStyle}>
          <h3>Create Custom Widget</h3>

          <TextField fullWidth label="Widget Title" margin="dense" />
          <TextField fullWidth label="Description (optional)" margin="dense" multiline rows={3} />

          <div style={{ display: "flex", justifyContent: "end", marginTop: "15px", gap: "10px" }}>
            <Button variant="outlined" onClick={() => setOpenCreate(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setOpenCreate(false)}>Create</Button>
          </div>
        </Box>
      </Modal>

      <Modal open={openNotifications} onClose={() => setOpenNotifications(false)}>
        <Box sx={modalStyle}>
          <h3>Notification History</h3>
          <p style={{ color: "gray", marginTop: "10px" }}>No notifications found.</p>

          <div style={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
            <Button variant="contained" onClick={() => setOpenNotifications(false)}>Close</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}

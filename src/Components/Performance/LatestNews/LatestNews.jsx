import React, { useState } from "react";
import styles from "./LatestNews.module.css";
import latestfeedback from "../../../assets/latest-feedback.png";
import { Button, Modal, Box, TextField } from "@mui/material";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: 24,
  padding: "22px",
};

const LatestNews = () => {
  const [openAddNew, setOpenAddNew] = useState(false);
  const [openViewAll, setOpenViewAll] = useState(false);

  return (
    <>
      <div className={styles.LatestNewsContainer}>
        <div className={styles.LatestNews}>
          <div>
            <img src={latestfeedback} alt="icon" />
          </div>
          <div className={styles.LatestNewsTitle}>Latest Notes</div>
        </div>

        <div className={styles.Activities}>
          <div className={styles.NoActivities}>No Activities found</div>
          <div className={styles.NoNotes}>No Notes/ Conversations available</div>
        </div>

        <div className={styles.buttondiv}>
          <Button
            className={styles.Addnew}
            variant="outlined"
            onClick={() => setOpenAddNew(true)}
          >
            Add new
          </Button>

          <Button
            className={styles.Viewall}
            onClick={() => setOpenViewAll(true)}
          >
            View All
          </Button>
        </div>
      </div>

      <Modal open={openAddNew} onClose={() => setOpenAddNew(false)}>
        <Box sx={modalStyle}>
          <h3 style={{ marginBottom: "10px" }}>Add New Note</h3>

          <TextField
            label="Write a note..."
            multiline
            rows={3}
            fullWidth
          />

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
            }}
          >
            <Button onClick={() => setOpenAddNew(false)} variant="outlined">
              Cancel
            </Button>

            <Button onClick={() => setOpenAddNew(false)} variant="contained">
              Save
            </Button>
          </div>
        </Box>
      </Modal>

      <Modal open={openViewAll} onClose={() => setOpenViewAll(false)}>
        <Box sx={modalStyle}>
          <h3 style={{ marginBottom: "10px" }}>All Notes</h3>

          <p style={{ color: "gray", marginTop: "10px" }}>
            No notes available yet.
          </p>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
            <Button variant="contained" onClick={() => setOpenViewAll(false)}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default LatestNews;

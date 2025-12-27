import React from "react";
import calendarcImg from "../../assets/calendarc-img.png";
import styles from "./Refferals.module.css";
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const Refferals = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={styles.refferalsContainer}>
      <div className={styles.refferalsparent2}>
        <div className={styles.refferalsparent}>
          <div className={styles.titleimage}>
            <img src={calendarcImg} alt="calendarc-img" />
            <div>Refferals(1)</div>
          </div>
          <div className={styles.refer} onClick={() => { setOpen(true) }}>Refer candidate</div>
        </div>

        <div className={styles.titleimagep}>
          <p>CANDIDATE</p>
          <p>JOB STATUS</p>
          <p>RECUTER</p>
        </div>
        <div>

        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className={styles.addResume}>Add Resume</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <input type="text" placeholder="Name of the candidate" className={styles.addResumeInput} />
            <Button onClick={() => setOpen(false)}>Submit</Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

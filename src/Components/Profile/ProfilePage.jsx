import React,{useState} from 'react';
import styles from "./ProfilePage.module.css"
import { Button } from '@mui/material';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"

function createData(name, calories, fat, carbs, protein, proteins, protein1, protein2, protein3, protein4) {
  return { name, calories, fat, carbs, protein, proteins, protein1, protein2, protein3, protein4 };
}
const rows = [
  createData("Pranith", "Patel", "Gandrath", "Female", "2001", "19-Oct-2001", "Self", "single", "Pranith@easportca.com", "self"),
];

const ProfilePage = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Profile", 14, 15);

    const tableColumn = [
      "Name",
      "Middle Name",
      "Last Name",
      "Gander",
      "Show Date of Birth Year",
      "Date Of Birth",
      "Date of Birth Access",
      "Marital Status",
      "Persanal Email Id",
      "Persanal Email Id Access",
    ]

    const tableRows = rows.map((row) => [
      row.name,
      row.calories,
      row.fat,
      row.carbs,
      row.protein,
      row.proteins, row.protein1, row.protein2, row.protein3, row.protein4
    ])

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    })

    doc.save("Profile.pdf")
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Containerprofilepage}>
        <div> <h2>Over View</h2></div>
        <div className={styles.personalbtns}>
          <Button variant='outlined' onClick={handleOpen}>View Personal Details</Button>
          <Button variant='contained' onClick={handleDownloadPDF}>Download</Button>
        </div>
      </div>

      <div className={styles.biographical}>
        <h3>Biographical</h3>
        <div className={styles.biographicalContainer}>
          <div className={styles.details}>
            <p className={styles.detailsp}>First Name</p>
            <p className={styles.detailspd}>Pranitha</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Middle Name</p>
            <p className={styles.detailspd}>Patel</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Last Name</p>
            <p className={styles.detailspd}>Gandrath</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Gander</p>
            <p className={styles.detailspd}>Female</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Show Date of Birth Year</p>
            <p className={styles.detailspd}>2001</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Date Of Birth</p>
            <p className={styles.detailspd}>19-Oct-2001</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Date of Birth Access</p>
            <p className={styles.detailspd}>Self</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Marital Status</p>
            <p className={styles.detailspd}>Single</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Marital Status Since</p>
            <p className={styles.detailspd}>****</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Marriage Anniversary Access</p>
            <p className={styles.detailspd}>Self</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Mobile Access</p>
            <p className={styles.detailspd}>****</p>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.Contact}>
        <h3>Contact</h3>
        <div className={styles.biographicalContainer}>
          <div className={styles.details}>
            <p className={styles.detailsp}>Persanal Email Id</p>
            <p className={styles.detailspd}>Pranith@easportca.com</p>
          </div>
          <div className={styles.details} >
            <p className={styles.detailsp}>Persanal Email Id Access</p>
            <p className={styles.detailspd}>Self</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Persanal Mobile Access</p>
            <p className={styles.detailspd}>Self</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Persanal Mobile Number</p>
            <p className={styles.detailspd}>****</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Office Mobile Access</p>
            <p className={styles.detailspd}>Self</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Office Mobile No.</p>
            <p className={styles.detailspd}>****</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Facebook ID</p>
            <p className={styles.detailspd}>****</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>LinkdIn ID</p>
            <p className={styles.detailspd}>****</p>
          </div>
        </div>
      </div>
      <div></div>
      <div className={styles.divider}></div>
      <div className={styles.Address}>
        <h3>Address</h3>
        <div className={styles.biographicalContainer}>
          <div className={styles.details}>
            <p className={styles.detailsp}>Address as per the Aadhar Card</p>
            <p className={styles.detailspd}>****</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Present Portal Address </p>
            <p className={styles.detailspd}>****</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Permanent Portal Address</p>
            <p className={styles.detailspd}>****</p>
          </div>
        </div>
      </div>
       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Personal Details</DialogTitle>
        <DialogContent dividers>
          <div className={styles.biographicalContainer}>
            <div className={styles.details}>
              <p className={styles.detailsp}>First Name</p>
              <p className={styles.detailspd}>Pranitha</p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsp}>Middle Name</p>
              <p className={styles.detailspd}>Patel</p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsp}>Last Name</p>
              <p className={styles.detailspd}>Gandrath</p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsp}>Gander</p>
              <p className={styles.detailspd}>Female</p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsp}>Date Of Birth</p>
              <p className={styles.detailspd}>19-Oct-2001</p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsp}>Marital Status</p>
              <p className={styles.detailspd}>Single</p>
            </div>
            <div className={styles.details}>
              <p className={styles.detailsp}>Persanal Email Id</p>
              <p className={styles.detailspd}>Pranith@easportca.com</p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ProfilePage

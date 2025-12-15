import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import styles from "./NavBarModal.module.css";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 1100,
  maxHeight: "85vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  borderRadius: 8,
  boxShadow: 24,
  p: 2,
};

export default function NavBarModal({ open, setOpen, rows, showValues, months = [] }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal open={Boolean(open)} onClose={handleClose} aria-labelledby="preview-title">
      <Box sx={modalStyle}>
        <div className={styles.header}>
          <Typography id="preview-title" variant="h6" className={styles.title}>
            Employee — Data
          </Typography>
          <IconButton onClick={handleClose} size="small" aria-label="close preview">
            <CloseIcon />
          </IconButton>
        </div>

        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table stickyHeader aria-label="preview-table">
            <TableHead>
              <TableRow>
                <TableCell className={styles.particularsHeader}>AddressAsPertheAadharCard</TableCell>
                <TableCell align="right">DateOfBirth</TableCell>
                <TableCell align="right">DateOfBirthAccess</TableCell>
                <TableCell align="right">FacebookID</TableCell>
                <TableCell align="right">FirstName</TableCell>
                <TableCell align="right">Gander</TableCell>
                <TableCell align="right">LastName</TableCell>
                <TableCell align="right">LinkdInID</TableCell>
                <TableCell align="right">MaritalStatus</TableCell>
                <TableCell align="right">MaritalStatusSince</TableCell>
                <TableCell align="right">MarriageAnniversaryAccess</TableCell>
                <TableCell align="right">MiddleName</TableCell>
                <TableCell align="right">MobileAccess</TableCell>
                <TableCell align="right">OfficeMobileAccess</TableCell>
                <TableCell align="right">OfficeMobileNo</TableCell>
                <TableCell align="right">PermanentPortalAddress</TableCell>
                <TableCell align="right">PersanalEmailAccess</TableCell>
                <TableCell align="right">PersanalEmailId</TableCell>
                <TableCell align="right">PersanalMobileAccess</TableCell>
                <TableCell align="right">PersanalMobileNumber</TableCell>
                <TableCell align="right">PresentPortalAddress</TableCell>
                <TableCell align="right">ShowDateOfBirthYear</TableCell>
                <TableCell align="right">createdAt</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">updatedAt</TableCell>

                {/* {months.map((m, i) => (
                  <TableCell key={i} align="right">{m}</TableCell>
                ))} */}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows?.map((rows) => (
                <TableRow key={rows.AddressAsPertheAadharCard}>
                  <TableCell component="th" scope="row">{rows.DateOfBirth}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.DateOfBirthAccess}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.FacebookID}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.FirstName}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.Gander}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.LastName}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.LinkdInID}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.MaritalStatus}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.MaritalStatusSince}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.MarriageAnniversaryAccess}</TableCell>

                  <TableCell align="right">{!showValues ? "****" : rows.MiddleName}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.MobileAccess}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.OfficeMobileAccess}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.OfficeMobileNo}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.PermanentPortalAddress}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.PersanalEmailAccess}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.PersanalEmailId}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.PersanalMobileAccess}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.PersanalMobileNumber}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.PresentPortalAddress}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.ShowDateOfBirthYear}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.createdAt}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.email}</TableCell>
                  <TableCell align="right">{!showValues ? "****" : rows.updatedAt}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}

import { Button } from "@mui/material";
import React from "react";
import Clipath from "../../../assets/Clipath.png";
import styles from "./Loans.module.css";
import { useState } from "react";
import SideModalLoan from "./SideModalLoan/SideModalLoan";
export const Loans = () => {
  const [openSelectbtn, setOpenSelectbtn] = useState(false);
  return (
    <div lassName={styles.Loanstab}>
      <div className={styles.Loans}>
        <h2>Loans for FY25-26</h2>
        <div>
          <Button variant="outlined" onClick={() => setOpenSelectbtn(!openSelectbtn)}>Raise Request</Button>
          <SideModalLoan isOpen={openSelectbtn} onClose={() => setOpenSelectbtn(false)} title="Attendence Adjustment">
          </SideModalLoan>
        </div>
      </div>
      <div className={styles.Loanstablebox}>
        <div className={styles.Loanstable}>
          <div>Loans Id</div>
          <div>Loans Type</div>
          <div>Loans Name</div>
          <div>Number of Loans</div>
          <div>EMI Type</div>
          <div>Loans Amount</div>
          <div>Rate of Interest </div>
          <div>Standarad Interest Rating</div>
        </div>
        <div className={styles.Loansimg}>
          <img src={Clipath} />
        </div>
        <div>There are no records to display</div>
      </div>
    </div>
  );
};

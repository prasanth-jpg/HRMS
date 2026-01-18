import React, { useEffect, useState } from "react";
import styles from "../BenefitsTab/BenefitsTab.module.css";

const BenefitSlips = () => {
  const [benifits, setBenifits] = useState([])

  const fetchdata = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/BenefitsSlips/BenefitsSlipsGet`);
      const data = await res.json();
      setBenifits(data || null);
      console.log("ddddddd",data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])



  return (
    <div className={styles.tabContent}>
      <h3 className={styles.sectionTitle}>Benefits Slips for FY25-26</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Slip Number</th>
            <th>Generated On</th>
            <th>Download</th>
                        <th>Email</th>

          </tr>
        </thead>
        <tbody>
                      {benifits.map((items) => (

          <tr>
            {/* <td colSpan={4} className={styles.emptyCell}>
              <p>No benefit slips have been generated for the selected year.</p>
            </td> */}
                 <td>{items.Month}</td>
                <td>{items.SlipNumber}</td>
                <td>{items.GeneratedOn}</td>
                <td>{items.Download}</td>
                <td>{items.email}</td>

          </tr>
             ))}
        </tbody>
      </table>
    </div>
  );
};

export default BenefitSlips;

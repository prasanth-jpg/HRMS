import React, { useEffect, useState } from "react";
import styles from "../BenefitsTab/BenefitsTab.module.css";

const MyBenefits = () => {
  const [benifits, setBenifits] = useState([])

  const fetchdata = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/MyBenefits/MyBenefitsGet`);
      const data = await res.json();
      setBenifits(data || null);
      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchdata()
  }, [])

  return (
    <div className={styles.tabContent}>
      <h3 className={styles.sectionTitle}>My Benefits for FY25-26</h3>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Benefit Type</th>
            <th>Annual Limit</th>
            <th>Utilized</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {benifits.map((items) => (

            <tr>
              <td>{items.BenefitType}</td>
              <td>{items.AnnualLimit}</td>
              <td>{items.Utilized}</td>
              <td>{items.Balance}</td>
             </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default MyBenefits;

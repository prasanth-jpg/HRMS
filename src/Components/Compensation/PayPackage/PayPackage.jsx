import React, { use, useEffect, useState } from 'react'
import styles from "./PayPackage.module.css";

export const PayPackage = ({ showValues }) => {
  const[payPackageData, setPayPackageData]=useState({});

  const AnnualFlexi = [
    { Earnings: "Basic", monthly: "4000", annually: "200000" },
    { Earnings: "HRA", monthly: "6000", annually: "200000" },
    { Earnings: "Other Allownces", monthly: "8000", annually: "200000" },
    { Earnings: "Provident Fund", monthly: "12000", annually: "200000" },
    { Earnings: "CTC", monthly: "15000", annually: "200000" },
    {
      Earnings: "Variable Pay Package(IN Total CTC",
      monthly: "16000",
      annually: "200000",
    },
    { Earnings: "Total CTC", monthly: "18000", annually: "200000" },
  ];


  const fetchdata = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/payPackage/paypackageGet`);
      const data = await res.json();
      setPayPackageData(data || null);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchdata()
  },[])

  useEffect(()=>{
console.log("payPackageData",payPackageData)
  },[payPackageData])
  return (
    <div className={styles.AnnualAndMonthlyContainerdiv}>
      <h2>Annual & Monthly CTC</h2>
      <div className={styles.AnnualAndMonthlyContainer}>
        <table>
          <thead>
            <tr className={styles.tableContainer}>
              <th>Earnings</th>
              <th>Monthly</th>
              <th>Annually</th>
            </tr>
          </thead>
          <tbody>
            {AnnualFlexi.map((items) => (
              <tr>
                <td>{items.Earnings}</td>
                <td>{showValues ? items.monthly : "*****"}</td>
                <td>{showValues ? items.annually : "*****"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

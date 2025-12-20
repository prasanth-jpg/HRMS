import React from 'react';
import styles from "./PersonalDetails.module.css"

const  PersonalDetails= () => {
  return (
    <div className={styles.Container}>
      <h2>Personal Details</h2>
      <div className={styles.biographical}>
        <h3>Biographical</h3>
        <div className={styles.biographicalContainer}>
          <div className={styles.details}>
            <p className={styles.detailsp}>First Name</p>
            <p className={styles.detailspd}>Pranitha</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Middle Name</p>
            <p className={styles.detailspd}>NA</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Last Name</p>
            <p className={styles.detailspd}>Gandrath</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Gander</p>
            <p className={styles.detailspd}>NA</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Show Date of Birth Year</p>
            <p className={styles.detailspd}>No</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Date Of Birth</p>
            <p className={styles.detailspd}></p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Date of Birth Access</p>
            <p className={styles.detailspd}></p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Marital Status</p>
            <p className={styles.detailspd}>Single</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Marital Status Since</p>
            <p className={styles.detailspd}>NA</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Marriage Anniversary Access</p>
            <p className={styles.detailspd}>NA</p>
          </div>
          <div className={styles.details}>
            <p className={styles.detailsp}>Mobile Access</p>
            <p className={styles.detailspd}>Yes</p>
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
            <p className={styles.detailspd}>Everyone</p>
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
    </div>
  )
}

export default PersonalDetails

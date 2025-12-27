import React from "react";
import styles from "./Activity.module.css";
import activity2 from "../../../assets/activity2.png";
import img from "../../../assets/Activity.png";

const Activity = () => {
  return (
    <div className={styles.ActivityContainer}>
      <div className={styles.Activity}>
        <div>
          <img src={activity2} />
        </div>
        <div className={styles.ActivityTitledays}>
        <div className={styles.ActivityTitle}>Activity</div>
        <div className={styles.lastdays}>Last 20 days</div>
        </div>
      </div>
      <div className={styles.ActivityImage}>
        <img src={img} />
      </div>
      <div className={styles.ActivityFound}>
        <p className={styles.noactivitiesfound}>No Acgtivities found</p>
        <p className={styles.noactivities}>No activity recorded in the last 30days</p>
      </div>
    </div>
  );
};

export default Activity;

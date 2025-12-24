import React from "react";
import styles from "./Feedback.module.css";
import continuous from '../../../assets/continuous.png'


const Feedback = () => {
  return (
    <div>
      <div className={styles.Feedbackcard}>
        <div className={styles.Feedback}>
          <div>
            <img src={continuous} />
          </div>
          <div className={styles.FeedbackTitle}>Feedback</div>
        </div>
        <div className={styles.Feedbackbuttonsparent}>
          <div  className={styles.Feedbackbuttonsparent2}>
            <div className={styles.Feedbackbuttons}>
              <div className={styles.buttondivs}>1M</div>
              <div className={styles.buttondivs}>3M</div>
              <div className={styles.buttondivs}> 6M</div>
              <div className={styles.buttondivs}>1Y</div>
            </div>
            <div className={styles.Feedbackvalues}>
              <div className={styles.leftside} >
                <div className={styles.values}>0</div>
                <div className={styles.label}>Total Given</div>
              </div>
              <div className={styles.rightside}>
                <div className={styles.values}>0</div>
                <div className={styles.label}>Total Received</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

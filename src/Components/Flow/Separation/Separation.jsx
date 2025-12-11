import React, { useState } from "react";
import group from "../../../assets/groupcopy.png";
import styles from "./Separation.module.css";
import InitiateSeparationModal from "../FlowRequest/InitiateSeparationModal";

export default function Separation() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className={styles.Separationtitle}>Separation</div>
      <div className={styles.Separation}>
        <div className={styles.imageofseparation}>
          <img src={group} />
        </div>

        <div className={styles.invite} onClick={() => setOpenModal(true)}>
          <div className={styles.invitename}>INITIATE SEPARATION</div>
        </div>

        {openModal && (
          <InitiateSeparationModal open={openModal} onClose={() => setOpenModal(false)}>
            <h2>Initiate Separation</h2>
            <p>Enter employee separation details here</p>
            <button onClick={() => setOpenModal(false)}>Submit</button>
          </InitiateSeparationModal>
        )}
      </div>
    </div>
  );
}

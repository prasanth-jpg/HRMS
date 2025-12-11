import React from "react";
import styles from "./InitiateSeparationModal.module.css";

export default function InitiateSeparationModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closebtn} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

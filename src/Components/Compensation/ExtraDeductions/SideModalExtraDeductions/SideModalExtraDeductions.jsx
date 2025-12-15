import React from 'react'

import { Button } from '@mui/material'

import styles from "./SideModalExtraDeductions.module.css"

export default function SideModalExtraDeductions({ isOpen, onClose }) {
    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`} />
            <div className={`${styles.modal} ${isOpen ? styles.slideIn : styles.slideOut}`}>
                <div className={styles.header}>
                    <h3>Loans</h3>
                    <button className={styles.closeBtn} onClick={onClose}> x</button>
                </div>
                <div className={styles.content}>
                    <form className={styles.from}>


                        <div className={styles.buttonRow}>
                            <Button type="button" onClick={onClose} variant='outlined' className={styles.cancel}>Cancel</Button>
                            <Button type="button" onClick={onClose} variant='contained' className={styles.submit}>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

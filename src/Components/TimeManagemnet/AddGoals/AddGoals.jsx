import React from 'react'

import { Button } from '@mui/material'

import styles from "./AddGoals.module.css"

export default function AddGoals({ isOpen, onClose }) {
    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.showOverlay : ""}`} />
            <div className={`${styles.modal} ${isOpen ? styles.slideIn : styles.slideOut}`}>
                <div className={styles.header}>
                    <h3>Add Goals / Key Results Areas</h3>
                    <button className={styles.closeBtn} onClick={onClose}> x</button>
                </div>
                <div className={styles.content}>
                    <form className={styles.fro2m}>
                        <p className={styles.fromp}>Goals / Key Result Area Details</p>
                        <div className={styles.fro2mGoals}>
                            <p>Goals / Key Result Area title</p>
                            <input type="text" placeholder='Goals / Key Result Area title Here' />
                        </div>
                        <div className={styles.fro2mGoals}>
                            <p>Goals / Key Result Area Description</p>
                            <input type="text" placeholder='Goals / Key Result Area title Here' />
                        </div>
                        <div className={styles.row2}>
                            <div className={styles.field}>
                                <label>Shift Date From *</label>
                                <input type='date' defaultValue="2025-12-10" />
                            </div>
                            <div className={styles.field}>
                                <label>Shift Date to *</label>
                                <input type='date' defaultValue="2025-12-10" />
                            </div>
                        </div>
                        <div className={styles.row2}>
                            <div className={styles.field}>
                                <label>Weightage % *</label>
                                <input type='text' placeholder='Enter weight' />
                            </div>
                            <div className={styles.field}>
                                <label>Goals / key  Result Area Status</label>
                                <input type='text' placeholder='Not Started' />
                            </div>
                        </div>
                        <div className={styles.row2}>
                            <div className={styles.field}>
                                <label>Scorecard Pillar</label>
                                <input type='text' placeholder='Select Scorecard piller' />
                            </div>
                            <div className={styles.field}>
                                <label>Measure Lead Indicator</label>
                                <input type='text' placeholder='Enter value here' />
                            </div>
                        </div>
                        <div className={styles.row2}>
                            <div className={styles.field}>
                                <label>Goal Metric</label>
                                <input type='text' placeholder='Enter value here' />
                            </div>
                            <div className={styles.field}>
                                <label>Goals Target</label>
                                <input type='text' placeholder='Enter value here' />
                            </div>
                        </div>
                        <div className={styles.buttonRow}>
                            <Button type="button" onClick={onClose} variant='outlined' className={styles.cancel}>+ Sub Goals</Button>
                            <Button type="button" onClick={onClose} variant='contained' className={styles.submit}>Save</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
import React, { useState, useRef } from 'react'
import styles from "./IndividualFeedBack.module.css"
import IndividualFeedBackTab from './IndividualFeedBackTab'
import FocusAccess from './FocusAccess';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Button, Modal, Box, TextField } from "@mui/material";
const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "22px",
    boxShadow: 24,
};
export default function IndividualFeedBack() {
    const [hire, setHire] = useState("");
    const [pdfFile, setPdfile] = useState(null)
    const fileInputRef = useRef(null)
        const [SubmitCreate, setSubmitCreate] = useState(false);


    const handleFileClick = () => fileInputRef.current.click()

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === "application/pdf") {
            setPdfile(URL.createObjectURL(file));
        }
        else {
            alert("please upload a pdf file")
        }
    }

    const hireFn = (data) => {
        setHire(data)
    }


    return (
        <>
            <div className={styles.individualFeedBack}>
                <div className={styles.individualFeedBackLeft}>
                    <div className={styles.userDetails}>
                        <div className={styles.userDetails1}>
                            <div>For Position - SDE 2- FrontEnd (2025)</div>
                            <div>9th Sep 2025 @ 3:00 pm</div>
                        </div>
                        <div className={styles.userDetails1}>
                            <div>Stage - Technical Round 1(Microsoft Teams)</div>
                            <div>1 Hr</div>
                        </div>
                        <div> Scheduled by</div>
                    </div>
                    <div className={styles.tabAndResume}>
                        <div className={styles.tabs2} onClick={handleFileClick}>
                            <div className={styles.tabsName}>Resume</div>
                            <div className={styles.tabspdf}>Pranitha.pdf</div>
                        </div>
                        <div className={styles.resume}>
                            <input type='file' ref={fileInputRef} style={{ display: "none" }} accept='application/pdf' onChange={handleFileChange} />
                            {
                                pdfFile ? (
                                    <div className={styles.pdfViewer}>
                                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                                            <Viewer fileUrl={pdfFile} />
                                        </Worker>

                                    </div>
                                ) : <div className={styles.resume2}>Upload Resume</div>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.individualFeedBackRight}>
                    <IndividualFeedBackTab />
                    <div className={styles.scorecardtextdiv}>
                                         <div className={styles.scorecardtext}>
                            A scorecard has been created to help you structure your interview. Use this to submit your feedback after
                            evalution. Feedback is used internally and will not be shared with the condidate.
                        </div>
                        <div className={styles.Overall}>Your Overall Recommendation</div>
                        <div className={styles.btnsdiv}>
                        <div className={styles.btns}>
                            <div className={`${styles.btns1Green} ${hire === "Strong Hire" ? styles.btnactiveGreen : ""}`} onClick={() => hireFn("Strong Hire")}>Strong Hire</div>
                            <div className={`${styles.btns1Green} ${hire === "Hire" ? styles.btnactiveGreen : ""}`} onClick={() => hireFn("Hire")}>Hire</div>
                            <div className={`${styles.btns1Red} ${hire === "No Hire" ? styles.btnactiveRed : ""}`} onClick={() => hireFn("No Hire")}>No Hire</div>
                            <div className={`${styles.btns1Red} ${hire === "Strong No Hire" ? styles.btnactiveRed : ""}`} onClick={() => hireFn("Strong No Hire")}>Strong No Hire</div>
                               
                        </div>
                        <div>
                        <Button className={styles.submtbtn} variant="outlined" onClick={() => setSubmitCreate(true)}>
                            submit
                        </Button>
                        </div>
                        </div>
                        <div><FocusAccess /></div>
                    </div>
                </div>
            </div>
            <Modal open={SubmitCreate} onClose={() => setSubmitCreate(false)}>
                <Box sx={modalStyle}>
                    <h3>Interview Details</h3>

                    <TextField fullWidth label="Candidate name" margin="dense" />
                    <TextField fullWidth label="Candidate Details" margin="dense" multiline rows={3} />

                    <div style={{ display: "flex", justifyContent: "end", marginTop: "15px", gap: "10px" }}>
                        <Button variant="outlined" onClick={() => setSubmitCreate(false)}>Cancel</Button>
                        <Button variant="contained" onClick={() => setSubmitCreate(false)}>submit</Button>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

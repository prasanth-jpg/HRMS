import React, { useEffect, useState } from 'react'
import styles from "./OverallRemark.module.css"
import DeleteIcon from '@mui/icons-material/Delete'

import { Button, IconButton } from '@mui/material'


export default function OverallRemark() {
    const [activeVisi, setActiveVisi] = useState("")
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        setActiveVisi("meAndManager")
    }, [])
    const addQuestion = () => {
        setQuestions([...questions, { id: Date.now(), text: "" }])
    }

    const updateQuestion = (id, value) => {
        setQuestions(
            questions.map(q =>
                q.id === id ? { ...q, text: value } : q
            )
        )
    }

    const deleteQuestion = (id) => {
        setQuestions(questions.filter(q => q.id !== id))
    }
    return (
        <div className={styles.overalContainerRe}>
            <div className={styles.overalContainer}>
                <div className={styles.me}>
                    <div className={styles.formeedivcircle}></div>
                    <div className={styles.formeediv}>
                        <span>For</span>
                        <span className={styles.formee}>Me</span>
                    </div>
                </div>
                <div className={styles.ovaralRemark}>
                    <h3>Overall Remarks</h3>
                </div>
                <div className={styles.meDiver}></div>
                <div className={styles.whoWould}>
                    <label>Who would you like Feedback from?</label>
                    <input type='textarea' placeholder='Type here' />
                </div>
                <div className={styles.whatistheFeedback}>
                    <label>What is the Feedback about?</label>
                    <input type='textarea' placeholder='Type here' />
                </div>
                <div className={styles.selectVisibilty}>
                    <p>Select Visibility</p>
                    <div className={styles.selectVisibiltyOptn}>
                        <div className={`${styles.selectVisibiltyOptn2} ${activeVisi === "meAndManager" ? styles.activeVisibtn : ""}`} onClick={() => setActiveVisi("meAndManager")}>Me and Manager</div>
                        <div className={`${styles.selectVisibiltyOptn2} ${activeVisi === "onlyMe" ? styles.activeVisibtn : ""}`} onClick={() => setActiveVisi("onlyMe")}>Only Me</div>
                    </div>
                </div>
                <div className={styles.qnes}>Questions</div>
                <div className={styles.meDiver}></div>
                <div className={styles.questionList}>
                    {questions.map((q, index) => (
                        <div key={q.id} className={styles.questionItem}>
                            <input
                                type="text"
                                placeholder={`Question ${index + 1}`}
                                value={q.text}
                                onChange={(e) => updateQuestion(q.id, e.target.value)}
                            />
                            <IconButton onClick={() => deleteQuestion(q.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    ))}
                </div>

                <div className={styles.addYourown}>
                    <Button variant='outlined' onClick={addQuestion}>
                        + Add your own question
                    </Button>
                </div>
            </div>
            {/* <div className={styles.qnes}>Questions</div>
            <div className={styles.meDiver}></div>
            <div className={styles.addYourown}>
                <Button variant='outlined'>+ Add your own question</Button>
            </div> */}
        </div>
    )
}

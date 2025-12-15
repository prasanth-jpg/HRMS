import React, { useState } from 'react'
import styles from "./BalanceLeave.module.css"
import unpaidLeave from "../../../assets/unpaidLeave.png"

export default function BalanceLeave({ setleavesTabClose, setLeaveDetailsWindow }) {
  const [open, setOpen] = useState("")
  const [openB, setOpenB] = useState(false)

  const openBox = (leave) => {
    setOpen(leave)
    setOpenB((prev) => !prev)
  }

  const openTabDetails = () => {
    setleavesTabClose(true)
    setLeaveDetailsWindow(open)
    setOpenB(false)
  }
  return (
    <div className={styles.leaveCotainer}>
      <div className={styles.leaveCotaineraBal}>Balance as of Today</div>
      <div className={styles.leaveBalanceCotainer}>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
            <div className={styles.colorr}></div>
            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>1</span>
              <span className={styles.leaveAddComp}>Comp off</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}  onClick={() => openTabDetails()}>+</span>
              <div className={styles.leaveAddDot} onClick={() => { openBox("compOff") }}><p>...</p></div>
            </div>
            {open === "compOff" && openB && <div className={styles.LeaveDetails}>
              <div onClick={() => openTabDetails()}>Leave Details</div>
              <div onClick={() => openTabDetails()}>Comp off credit list</div>
            </div>
            }
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAdd2}></div>
        </div>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
            <div className={styles.colorr2}></div>

            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>6</span>
              <span className={styles.leaveAddComp}>Casual Leaves</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}  onClick={() => openTabDetails()}>+</span>
              <div className={styles.leaveAddDot} onClick={() => { openBox("Casual Leaves") }}><p>...</p></div>
            </div>
            {open === "Casual Leaves" && openB && <div className={styles.LeaveDetails}>
              <div onClick={() => openTabDetails()}>Leave Details</div>

              <div onClick={() => openTabDetails()}>Casual Leaves credit list</div>
            </div>
            }
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAdd2}>
            <span className={styles.leaveAddOne}>6</span>
            <span className={styles.leaveAddComp}>Accrued so for this year</span>
          </div>
        </div>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
            <div className={styles.colorr3}></div>
            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>5</span>
              <span className={styles.leaveAddComp}>Earned Leaves</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}  onClick={() => openTabDetails()}>+</span>
              <div className={styles.leaveAddDot} onClick={() => { openBox("Earned Leaves") }}><p>...</p></div>
            </div>
            {open === "Earned Leaves" && openB && <div className={styles.LeaveDetails}>
              <div onClick={() => openTabDetails()}>Leave Details</div>

              <div onClick={() => openTabDetails()}>Earned Leaves credit list</div>
            </div>
            }
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAdd2}>
            <span className={styles.leaveAddOne}>7</span>
            <span className={styles.leaveAddComp}>Accrued so for this year</span>
          </div>
        </div>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
            <div className={styles.colorr4}></div>

            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>5</span>
              <span className={styles.leaveAddComp}>Sick Leaves</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}  onClick={() => openTabDetails()}>+</span>
              <div className={styles.leaveAddDot} onClick={() => { openBox("Sick Leaves") }}><p>...</p></div>
            </div>
            {open === "Sick Leaves" && openB && <div className={styles.LeaveDetails}>
              <div onClick={() => openTabDetails()}>Leave Details</div>

              <div onClick={() => openTabDetails()}>Sick Leaves credit list</div>
            </div>
            }
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAdd2}>
            <span className={styles.leaveAddOne}>6</span>
            <span className={styles.leaveAddComp}>Accrued so for this year</span>
          </div>
        </div>
        <div className={styles.leaveBalanceBox}>
          <div className={styles.leave1Compdiv}>
            <div className={styles.colorr5}></div>
            <div className={styles.leave1Comp}>
              <span className={styles.leaveAddOne}>
                <img src={unpaidLeave} alt='unpaidLeave' />
              </span>
              <span className={styles.leaveAddComp}>Loss of Pay</span>
            </div>
            <div className={styles.leaveAdd}>
              <span className={styles.leaveAddDotAdd}  onClick={() => openTabDetails()}>+</span>
              <div className={styles.leaveAddDot} onClick={() => { openBox("Loss of Pay") }}><p>...</p></div>
            </div>
            {open === "Loss of Pay" && openB && <div className={styles.LeaveDetails}>
              <div onClick={() => openTabDetails()}>Leave Details</div>

              <div onClick={() => openTabDetails()}>Loss of Pay credit list</div>
            </div>
            }
          </div>
          <div className={styles.diver}></div>
          <div className={styles.leaveAddReady}>
            <div className={styles.already}>
              <div>0</div>
              <div>Already Taken</div>
            </div>
            <div className={styles.already}>
              <div>0</div>
              <div>Applied</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

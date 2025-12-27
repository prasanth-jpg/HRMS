import { Button } from '@mui/material';
import work_duration from "../../../assets/work_duration.png"
import chat from "../../../assets/chart.png"
import backbtn from "../../../assets/backbtn.png"
import frwbtn from "../../../assets/frwbtn.png"
import absent from "../../../assets/absent.png"
import present from "../../../assets/present.png"
import { useAttendance } from "../../../context/AttendanceContext";

import { useState, useRef, useEffect } from 'react';
import SideModal from '../SideModal/SideModal';
import SideModalAttendence from '../SideModalAttendence/SideModalAttendence';
import SideModalLeave from '../SideModalLeave/SideModalLeave';
import SideShiftBar from '../SideShiftBar/SideShiftBar';

import styles from './Attendence.module.css';

const events = {
    "2025-10-02": [
        {
            title: "Holiday (Mahatma Gandhi Jyanthi)",
            time: "10:00 - 19:00"
        }
    ],
    "2025-10-11": [
        {
            title: "Holiday (Mahatma Gandhi Jyanthi)",
            time: "10:00 - 19:00"
        }
    ],
    "2025-10-21": [
        {
            title: "Work From Home",
            time: "10:00 - 19:00",
            img: present
        }
    ],
    "2025-10-26": [
        {
            title: "Work From Home",
            time: "10:00 - 19:00",
            img: present
        }
    ],
    "2025-10-19": [
        {
            title: "Birthday",
            time: "10:00 - 19:00",
            img: absent
        }
    ],
    "2025-10-02": [
        {
            title: "Week Off",
            time: "10:00 - 19:00"
        }
    ],
    "2025-10-02": [
        {
            title: "Week Off",
            time: "10:00 - 19:00"
        }
    ],
}

export default function Attendence() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 9));
    const [openSelect, setOpenSelect] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenAtt, setIsOpenAtt] = useState(false)
    const [isOpenShift, setIsOpenShift] = useState(false)
    const [isOpenLeave, setIsOpenLeave] = useState(false)
    const attendenceRef = useRef(null);

    const { attendance } = useAttendance();

    const monthStart = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(), 1
    )
    const monthEnd = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1, 0
    )
    const startDate = new Date(monthStart);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const endDate = new Date(monthEnd);
    endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

    const days = [];
    let day = new Date(startDate)

    while (day <= endDate) {
        days.push(new Date(day))
        day.setDate(day.getDate() + 1)
    }

    const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
    const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))

    const formateDateKey = (date) => date.toISOString().split("T")[0];

    const getAttendanceStatus = (date) => {
        const isWeekend = date.getDay() === 0 || date.getDay() === 6;
        if (isWeekend) return null;

        const formattedDate = date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });

        const record = (attendance?.date === formattedDate) ? attendance : null;

        if (record && record.records.length > 0) {
            return { status: "Present", img: present };
        } else {
            return { status: "Absent", img: absent };
        }
    };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (attendenceRef.current && !attendenceRef.current.contains(event.target)) {
            setOpenSelect(false);
          }
        };
        if (openSelect) {
          document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [openSelect]);
    return (
        <div className={styles.leaveHeaderTabdiv}>
            <div className={styles.leaveHeaderTab}>
                <div>Attendence</div>
                <div className={styles.leavebtnselect}  ref={attendenceRef}>
                    <Button variant="contained" onClick={() => { setOpenSelect((prev) => !prev) }}>+ Request &#136;</Button>
                    {openSelect && <div className={styles.btnselect}>
                        <p onClick={() => setIsOpenAtt(true)}>Attendence Adjustment</p>
                        <p onClick={()=>alert("Clock in request has Sent")}>Clockin</p>
                        <p onClick={() => setIsOpenShift(true)}>Shift Change</p>
                        <p onClick={() => setIsOpen(true)}>Work from home</p>
                        <div className={styles.attendenceDiver}></div>
                        <p onClick={() => setIsOpenLeave(true)}>Leave</p>
                    </div>
                    }
                </div>
            </div>
            <div className={styles.leaveBCotainer}>
                <div className={styles.leaveBCotainer1}>Matrix</div>
                <div className={styles.diver}></div>
                <div className={styles.leaveBCotainer2}>
                    <div className={styles.leaveBCotainer2parent}>
                        <div className={styles.leaveBCotainerchat}>
                            <div className={styles.leaveBCotainerchatlive}>Avg work duration </div>
                            <div className={styles.leaveBCotainerchatliveimg}><img src={work_duration} /> 08:59 Hrs</div>
                        </div>
                        <div className={styles.leaveBCotainerchat}>
                            <div className={styles.leaveBCotainerchatlive}>Avg Late By: </div>
                            <div className={styles.leaveBCotainerchatliveimg}><img src={chat} /> 00:32 Hrs</div>
                        </div>
                    </div>
                    <div> &#136;</div>
                </div>
            </div>

            <div className={styles.calender}>
                <div className={styles.headerParent}>
                    <div className={styles.header}>
                        <div onClick={prevMonth} className={styles.navBtn}><img src={backbtn} /></div>

                        <div onClick={nextMonth} className={styles.navBtn}><img src={frwbtn} /></div>
                        <h2>
                            {currentDate.toLocaleString("default", { month: "long" })}{" "}
                            {currentDate.getFullYear()}
                        </h2>
                    </div>
                </div>
                <div className={styles.weekdays}>
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                        <div key={d}>{d}</div>
                    ))}
                </div>
                <div className={styles.daysGrid}>
                    {
                        days.map((d) => {
                            const isCurrentMonth = d.getMonth() === currentDate.getMonth();
                            const isWeekend = d.getDay() === 0 || d.getDay() === 6;
                            const key = formateDateKey(d);
                            let dayEvents = events[key] || [];
                            const attStatus = getAttendanceStatus(d);

                            if (attStatus && dayEvents.length === 0) {
                                dayEvents = [
                                    {
                                        title: attStatus.status,
                                        img: attStatus.img,
                                        time: "10:00 - 19:00",
                                    },
                                ];
                            }

                            console.log("d.getDate()", d.getDate(), days)
                            return (
                                <div key={d} className={`${styles.day} ${!isCurrentMonth ? styles.otherMonth : ""} ${isWeekend ? styles.weekend : ""}`}>
                                    <div className={styles.datePresent}>
                                        <div className={styles.date}>{d.getDate()}</div>
                                        {
                                            dayEvents.map((ev, idx) => (
                                                <div key={idx} className={styles.imgday}>
                                                    <img src={ev.img} />
                                                    <div className={styles.statusLabel}>{ev.title}</div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    {
                                        dayEvents.map((ev, idx) => (
                                            <div key={idx} className={styles.events}>
                                                <span className={styles.eventTitle}>{ev.title}</span>
                                                <span className={styles.eventTime}>{ev.time}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <SideModal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Work From Home Request">
            </SideModal>
            <SideModalAttendence isOpen={isOpenAtt} onClose={() => setIsOpenAtt(false)} title="Attendence Adjustment">
            </SideModalAttendence>
            <SideShiftBar isOpen={isOpenShift} onClose={() => setIsOpenShift(false)} title="Attendence Adjustment">
            </SideShiftBar>
            <SideModalLeave isOpen={isOpenLeave} onClose={() => setIsOpenLeave(false)} title="Attendence Adjustment">
            </SideModalLeave>
        </div>
    )
}

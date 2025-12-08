import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import styles from "./HolidayList.module.css";

export default function HolidayList() {

  const [openRequest, setOpenRequest] = useState(false);
  const [selectedHoliday, setSelectedHoliday] = useState(null);

  const [showFilter, setShowFilter] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const holidays = [
    { date: "01 JAN", holiday: "New Year", day: "Wednesday", type: "Optional Holiday" },
    { date: "14 JAN", holiday: "Makar Sankranti", day: "Thursday", type: "Holiday" },
    { date: "14 MAR", holiday: "Holi", day: "Friday", type: "Holiday" },
    { date: "01 APR", holiday: "Eid-UI-Fitr", day: "Tuesday", type: "Optional Holiday" },
    { date: "18 APR", holiday: "Good Friday", day: "Friday", type: "Holiday" },
    { date: "15 AUG", holiday: "Independence Day", day: "Friday", type: "Holiday" },
    { date: "27 AUG", holiday: "Ganesh Chaturthi", day: "Wednesday", type: "Holiday" },
    { date: "01 OCT", holiday: "Navami", day: "Wednesday", type: "Optional Holiday" },
  ];

  const filteredHolidays = holidays.filter((item) =>
    item.holiday.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.mainContainer}>
      
      <div className={styles.heading}>Holiday List - 2025</div>

      <div className={styles.searchActions}>
        <div className={styles.searchBox}>
          <SearchIcon fontSize="small" />
          <input 
            placeholder="Search Holiday..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.topIcons}>
          <button className={styles.iconBtn} onClick={() => setShowFilter(true)}>
            <FilterListIcon />
          </button>
          <button className={styles.iconBtn} onClick={() => setShowSettings(true)}>
            <SettingsIcon />
          </button>
        </div>
      </div>

      <div className={styles.tableHolidaydiv}>
        <table className={styles.tableHoliday}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Occasion</th>
              <th>Day</th>
              <th>Holiday Type</th>
              <th>Request</th>
            </tr>
          </thead>

          <tbody>
            {filteredHolidays.length > 0 ? (
              filteredHolidays.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.holiday}</td>
                  <td>{item.day}</td>
                  <td>{item.type}</td>
                  <td>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setSelectedHoliday(item.holiday);
                        setOpenRequest(true);
                      }}
                    >
                      Request
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ padding: "10px", color: "#888" }}>
                  ❌ No holiday found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {openRequest && (
        <div className={styles.requestOverlay}>
          <div className={styles.requestModal}>
            <h3>Request Holiday</h3>
            <p>You are requesting: <strong>{selectedHoliday}</strong></p>
            <textarea className={styles.textArea} placeholder="Reason (optional)" />
            <div className={styles.modalActions}>
              <button onClick={() => setOpenRequest(false)}>Cancel</button>
              <button className={styles.submitBtn} onClick={() => setOpenRequest(false)}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styles from "./PerformanceHistory.module.css";

const MOCK = [
  {
    id: "1",
    reviewCycleName: "Performance Review Cycle-July 2025",
    completedDate: "14-08-2025",
    goalsOverallRating: "--",
    competenciesOverallRating: "--",
    performanceReview: "--",
  },
  {
    id: "2",
    reviewCycleName: "Performance Review Cycle-2024",
    completedDate: "06-05-2025",
    goalsOverallRating: "3",
    competenciesOverallRating: "4",
    performanceReview: "Good",
  },
];

const parseDateDMY = (dateStr) => {
  const [dd, mm, yyyy] = dateStr.split("-").map(Number);
  return new Date(yyyy, mm - 1, dd);
};

export const PerformanceTable = ({
  data = MOCK,
  page = 1,
  perPage = 10,
}) => {
  const [sortAsc, setSortAsc] = useState(true);
  const [expandedMap, setExpandedMap] = useState({});
  const [showValues, setShowValues] = useState(true);
  const [openFilter, setOpenFilter] = useState(false);

  /** 🔹 Toggle expand */
  const onToggleExpand = (id) => {
    setExpandedMap((p) => ({ ...p, [id]: !p[id] }));
  };

  /** 🔹 Filter + Sort */
  const filtered = useMemo(() => {
    return [...data].sort((a, b) => {
      const da = parseDateDMY(a.completedDate);
      const db = parseDateDMY(b.completedDate);
      return sortAsc ? da - db : db - da;
    });
  }, [data, sortAsc]);

  const start = (page - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  /** 🔹 CSV Download */
  const downloadCSV = () => {
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((r) =>
      Object.values(r).join(",")
    );

    const csv = [headers, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "performance-history.csv";
    link.click();
  };

  return (
    <div className={styles.tableWrap}>
      <div className={styles.searchActions}>
        <div className={styles.searchBox}>
          <SearchIcon fontSize="small" />
          <input placeholder="Search Review Cycle Name" readOnly />
        </div>

        <div className={styles.topIcons}>
          {/* 🔹 SORT */}
          <button
            className={styles.iconBtn}
            title="Sort by date"
            onClick={() => setSortAsc((p) => !p)}
          >
            <FilterListIcon />
          </button>

          {/* 🔹 FILTER MODAL */}
          <button
            className={styles.iconBtn}
            title="Open filters"
            onClick={() => setOpenFilter(true)}
          >
            <SettingsIcon />
          </button>

          {/* 🔹 SHOW / HIDE */}
          <button
            className={styles.iconBtn}
            title="Show / Hide values"
            onClick={() => setShowValues((p) => !p)}
          >
            {showValues ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>

          {/* 🔹 DOWNLOAD */}
          <button
            className={styles.iconBtn}
            title="Download CSV"
            onClick={downloadCSV}
          >
            <CloudDownloadIcon />
          </button>
        </div>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th />
            <th>Review Cycle Name</th>
            <th>Completed Date</th>
            <th>Goals Rating</th>
            <th>Competencies</th>
            <th>Performance</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {pageItems.map((row) => {
            const expanded = expandedMap[row.id];
            const mask = (v) => (showValues ? v : "****");

            return (
              <React.Fragment key={row.id}>
                <tr>
                  <td>
                    <button
                      onClick={() => onToggleExpand(row.id)}
                      className={styles.expandBtn}
                    >
                      {expanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                    </button>
                  </td>
                  <td>{row.reviewCycleName}</td>
                  <td>{row.completedDate}</td>
                  <td>{mask(row.goalsOverallRating)}</td>
                  <td>{mask(row.competenciesOverallRating)}</td>
                  <td>{mask(row.performanceReview)}</td>
                  <td>
                    <CloudDownloadIcon />
                  </td>
                </tr>

                {expanded && (
                  <tr className={styles.expandedRow}>
                    <td />
                    <td colSpan={6}>
                      <strong>Additional Details Coming Soon...</strong>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>

      {/* 🔹 SIMPLE FILTER MODAL */}
      {openFilter && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Filters</h3>
            <p>Future filter options go here</p>
            <button onClick={() => setOpenFilter(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceTable;

import React, { useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import styles from "../../Performance/TabsTabs/PerformanceHistory.module.css";

/* -------------------- HELPERS -------------------- */

function parseDateDMY(dateStr) {
  const [dd, mm, yyyy] = (dateStr || "01-01-1970").split("-").map(Number);
  return new Date(yyyy, mm - 1, dd);
}

function downloadCSV(rows) {
  if (!rows || rows.length === 0) return;

  const headers = Object.keys(rows[0]);
  const csv = [
    headers.join(","),
    ...rows.map(row =>
      headers.map(h => `"${row[h] ?? ""}"`).join(",")
    )
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "review-cycles.csv";
  a.click();

  window.URL.revokeObjectURL(url);
}

/* -------------------- COMPONENT -------------------- */

const FlowPaginationTable = ({
  data = [],
  searchText = "",
  onSearch,
  sortAsc,
  toggleSort,
  page = 1,
  perPage = 10,
  onToggleExpand,
  expandedMap = {},
  getPageItems,
}) => {
  const [localSearch, setLocalSearch] = useState(searchText);
  const [masked, setMasked] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  /* -------------------- SEARCH -------------------- */

  useEffect(() => {
    const t = setTimeout(() => {
      onSearch?.(localSearch);
    }, 300);
    return () => clearTimeout(t);
  }, [localSearch, onSearch]);

  const q = localSearch.toLowerCase().trim();

  /* -------------------- FILTER + SORT -------------------- */

  const filtered = useMemo(() => {
    const arr = data.filter(d =>
      d.reviewCycleName?.toLowerCase().includes(q)
    );

    arr.sort((a, b) => {
      const da = parseDateDMY(a.completedDate);
      const db = parseDateDMY(b.completedDate);
      return sortAsc ? da - db : db - da;
    });

    return arr;
  }, [data, q, sortAsc]);

  const total = filtered.length;
  const start = (page - 1) * perPage;
  const pageItems = filtered.slice(start, start + perPage);

  useEffect(() => {
    getPageItems?.(total);
  }, [total, getPageItems]);

  /* -------------------- UI -------------------- */

  return (
    <div className={styles.tableWrap}>
      {/* TOP BAR */}
      <div className={styles.tableHeader}>
        <div className={styles.searchActions}>
          <div className={styles.searchBox}>
            <SearchIcon fontSize="small" />
            <input
              placeholder="Search Review Cycle Name"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
          </div>

          <div className={styles.topIcons}>
            {/* SORT */}
            <button className={styles.iconBtn} onClick={toggleSort}>
              <FilterListIcon />
            </button>

            {/* SETTINGS */}
            <button
              className={styles.iconBtn}
              onClick={() => setOpenSettings(true)}
            >
              <SettingsIcon />
            </button>

            {/* MASK */}
            <button
              className={styles.iconBtn}
              onClick={() => setMasked(m => !m)}
            >
              <VisibilityIcon />
            </button>

            {/* DOWNLOAD ALL */}
            <button
              className={styles.iconBtn}
              onClick={() => downloadCSV(filtered)}
            >
              <CloudDownloadIcon />
            </button>
          </div>
        </div>

        {/* TABLE */}
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: 36 }} />
              <th>Review Cycle Name</th>
              <th onClick={toggleSort} className={styles.sortable}>
                Completed Date {sortAsc ? "▲" : "▼"}
              </th>
              <th>Goals Rating</th>
              <th>Competencies Rating</th>
              <th>Performance Review</th>
              <th style={{ width: 90 }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {pageItems.map((row) => {
              const expanded = expandedMap[row.id];
              return (
                <React.Fragment key={row.id}>
                  <tr>
                    <td>
                      <button
                        className={styles.expandBtn}
                        onClick={() => onToggleExpand(row.id)}
                      >
                        {expanded ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                      </button>
                    </td>

                    <td>{row.reviewCycleName}</td>
                    <td>{masked ? "****" : row.completedDate}</td>
                    <td>
                      {masked ? "****" : row.goalsOverallRating}
                      {row.goalsOverallRating !== "--" && !masked && (
                        <InfoOutlined fontSize="small" />
                      )}
                    </td>
                    <td>{masked ? "****" : row.competenciesOverallRating}</td>
                    <td>{masked ? "****" : row.performanceReview}</td>

                    <td>
                      <button
                        className={styles.rowAction}
                        onClick={() => downloadCSV([row])}
                      >
                        <CloudDownloadIcon />
                      </button>
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

            {pageItems.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center", padding: 20 }}>
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* SETTINGS MODAL */}
      {openSettings && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h3>Table Settings</h3>

            <label>
              <input type="checkbox" checked readOnly /> Show Ratings
            </label>

            <div style={{ marginTop: 16 }}>
              <button onClick={() => setOpenSettings(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowPaginationTable;

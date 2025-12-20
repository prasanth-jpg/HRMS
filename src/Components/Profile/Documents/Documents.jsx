import React, { useState } from "react";
import DocumentsTab from "../DocumentsTab/DocumentsTab";
import styles from "./Documents.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Documentcategories from "../Documentcategories/Documentcategories";
import AcknowledgementTab from "../AcknowledgementTab/AcknowledgementTab";
import DocumentApprovals from "../DocumentApprovals/DocumentApprovals";

export default function Documents() {
  const [showFilter, setShowFilter] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [visibleTable, setVisibleTable] = useState(true);

  const [activeTab, setActiveTab] = useState("MyDocuments");

  const [searchTerm, setSearchTerm] = useState("");

  const showFilterfn=()=>{
    setShowSettings(false)
    setShowFilter(true)
  }

    const showSettingsfn=()=>{
    setShowSettings(true)
    setShowFilter(false)
  }

  return (
    <div>
      <DocumentsTab active={activeTab} setActive={setActiveTab} />

      <div className={styles.searchActions}>
        <div className={styles.searchBox}>
          <SearchIcon fontSize="small" />
          <input
            placeholder="Search Review Cycle Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.topIcons}>
          <button
            className={styles.iconBtn}
            onClick={() => showFilterfn()}
          >
            <FilterAltIcon />
          </button>

          <button
            className={styles.iconBtn}
            onClick={() => showSettingsfn()}
          >
            <SettingsIcon />
          </button>

          <button
            className={styles.iconBtn}
            onClick={() => setVisibleTable(!visibleTable)}
          >
            <VisibilityIcon style={{ opacity: visibleTable ? 1 : 0.5 }} />
          </button>
        </div>
      </div>

      {showFilter && (
        <div className={styles.dropdownBox}>
          <p className={styles.dropdownTitle}>Filter Options</p>
          <select className={styles.dropdownSelect}>
            <option>All Documents</option>
            <option>Performance</option>
            <option>Compensation</option>
            <option>HR</option>
          </select>
        </div>
      )}

      {showSettings && (
        <div className={styles.dropdownBox}>
          <p className={styles.dropdownTitle}>Settings</p>
          <p className={styles.dropdownText}>More options coming soon...</p>
        </div>
      )}

      {visibleTable && (
        <>
          {searchTerm.trim() ? (
            <div className={styles.noResultsWrapper}>
              <p>
                No results found for <strong>"{searchTerm}"</strong>
              </p>
            </div>
          ) : (
            <>
              {activeTab === "MyDocuments" && <Documentcategories />}
              {activeTab === "Acknowledgement" && <AcknowledgementTab />}
              {activeTab === "Approvals" && <DocumentApprovals />}
            </>
          )}
        </>
      )}
    </div>
  );
}

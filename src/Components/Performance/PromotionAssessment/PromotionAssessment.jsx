import styles from "./PromotionAssessment.module.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Clipath from "../../../assets/Clipath.png";

export const PromotionAssessment = ({ searchText }) => {
  return (
    <div className={styles.CompetencyAssessment}>
      <div className={styles.searchActions}>
        <div className={styles.searchBox}>
          <SearchIcon fontSize="small" />
          <input
            placeholder="Search Review Cycle Name"
            value={searchText}
            readOnly
          />
        </div>
        <div className={styles.topIcons}>
          <button className={styles.iconBtn} onClick={()=>alert("Data Not Found")}>
            <FilterListIcon />
          </button>
          <button className={styles.iconBtn} onClick={()=>alert("Data Not Found")}>
            <SettingsIcon />
          </button>
          <button className={styles.iconBtn} onClick={()=>alert("Data Not Found")}>
            <VisibilityIcon />
          </button>
          <button className={styles.iconBtn} onClick={()=>alert("Data Not Found")}>
            <CloudDownloadIcon />
          </button>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{ width: 36 }}></th>
              <th>Compentencies Name</th>
              <th>
                Compentency Tier
              </th>
              <th>Assessed on</th>
              <th>Expected Proficiency</th>
              <th>Current Proficiency</th>
              <th style={{ width: 96 }}>Actions</th>
            </tr>
          </thead>
        </table>
        <div className={styles.imagediv}>
          <img src={Clipath} />
          <p>There are no records to display</p>
        </div>
      </div>
    </div>
  );
};

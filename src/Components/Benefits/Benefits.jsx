import React, { useState } from "react";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Select, MenuItem } from "@mui/material";

import filter from "../../assets/filter.png";
import styles from "./Benefits.module.css";
import BenefitsTab from "./BenefitsTab/BenefitsTab";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 1,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#007bff",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 24,
    height: 24,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#d3d6da",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const Benefits = ({ showValues, setShowValues }) => {
  const [financialYear, setFinancialYear] = useState("2025-26");

  const handleFinancialYearChange = (event) => {
    setFinancialYear(event.target.value);
    if (event.target.value === "2026-27") {
      alert("2026-27 Not yet available")
    }
  };

  const toggleShowValues = (event) => {
    if (setShowValues) {
      setShowValues(event.target.checked);
    }
  };

  return (
    <div className={styles.financialOverview}>
      <div className={styles.header}>
        <h1>Benefits</h1>

        <div className={styles.filters}>
          <div className={styles.financialYear}>
            <img src={filter} alt="filter" />
            <label>Financial Year:</label>
            <Select
              value={financialYear}
              onChange={handleFinancialYearChange}
              variant="standard"
              sx={{
                fontWeight: 700,
                "& .MuiSelect-standard": {
                  borderBottom: "none",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
              disableUnderline
            >
              <MenuItem value="2025-26" >2025-26</MenuItem>
              <MenuItem value="2026-27">2026-27</MenuItem>
              <MenuItem value="2027-28">2027-28</MenuItem>
            </Select>
          </div>

        </div>
      </div>

      <BenefitsTab />
    </div>
  );
};

export default Benefits;

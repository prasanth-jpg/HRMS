import React, { useEffect, useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";
import filter from "../../../assets/filter.png"
import styles from "./CompensationHeading.module.css";
import { Select, MenuItem } from "@mui/material";

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

const CompensationHeading = ({ showValues, setShowValues }) => {
    const [financialYear, setFinancialYear] = useState("2025-26");

    const handleFinancialYearChange = (event) => {
        setFinancialYear(event.target.value);
    };

    const toggleShowValues = (event) => {
        setShowValues(event.target.checked);
    };

    useEffect(() => {
        if (financialYear === "2026-27") {
            alert("Will release on 2026 Financial Year")
        }
         else if (financialYear === "2027-28") {
            alert("Will release on 2027 Financial Year")
        }
    }, [financialYear])
    return (
        <div className={styles.financialOverview}>
            <div className={styles.header}>
                <h1>Compensation</h1>

                <div className={styles.filters}>
                    <div className={styles.financialYear}>
                        <img src={filter} />
                        <label>Financial Year:</label>
                        <Select
                            value={financialYear}
                            onChange={handleFinancialYearChange}
                            variant="standard"
                            sx={{
                                fontWeight: 700,
                                '& .MuiSelect-standard': {
                                    borderBottom: 'none',
                                },
                                '& .MuiOutlinedInput-notchedOutline': {
                                    border: 'none',
                                },
                            }}
                            disableUnderline
                        >
                            <MenuItem value="2025-26">2025-26</MenuItem>
                            <MenuItem value="2026-27">2026-27</MenuItem>
                            <MenuItem value="2027-28">2027-28</MenuItem>
                        </Select>
                    </div>
                    <div className={styles.showValues}>
                        <FormControlLabel
                            label="Show Values"
                            labelPlacement="start"
                            control={
                                <IOSSwitch
                                    checked={showValues}
                                    onChange={toggleShowValues}
                                />
                            }
                            sx={{
                                marginLeft: "10px",
                                color: "#475569",
                                fontWeight: 500,
                                gap: "8px",
                                ".MuiFormControlLabel-label": {
                                    fontSize: "0.95rem",
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompensationHeading;

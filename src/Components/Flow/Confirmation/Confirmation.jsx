import React, { useEffect, useState } from 'react'
import styles from "./Confirmation.module.css"
import download from "../../../assets/download.png";
import eye from "../../../assets/eye2.png"
import right from "../../../assets/right.png"


export default function Confirmation() {
    const [hideInfo, setHideInfo] = useState("")
    const [visible, setVisible] = useState('')
    const tableBodyItems = [
        {
            status: "Completed",
            event: "Date of Joining",
            admin: "",
            iconsDownload: download,
            iconSee: eye
        },
        {
            status: "Completed",
            event: "Recommanded for Confirmation By",
            admin: "(Manager)",
            iconsDownload: download,
            iconSee: eye
        },
        {
            status: "Completed",
            event: "Recommanded for Confirmation has been acknowledge by",
            admin: "(Admin)",
            iconsDownload: download,
            iconSee: eye
        },
        {
            status: "Completed",
            event: "Probation confirmation due in 90 Day(s) from joining data",
            admin: "",
            iconsDownload: download,
            iconSee: eye
        },
    ]
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

    const hideInfoFn = (i) => {
        // const info = tableBodyItems;
        // const infoH = info.find((item,index)=>index === i);
        setHideInfo(i)
        setVisible((prev) => !prev)
    }
    return (
        <div className={styles.confirmation}>
            <div className={styles.confirmationWork}>Confirmation Workflow</div>
            <div className={styles.dateProb}>
                <div className={styles.date}>Date of Joining :</div>
                <div className={styles.prob}>Probation End data :</div>
            </div>
            <div className={styles.statusLastParent}>
                <div className={styles.statusLast}>
                    <div className={styles.status}>Status :</div>
                    <div className={styles.recommended}>Recommended for Confirmation</div>
                </div>
                <div className={styles.last}>Last Action Taken By :</div>
            </div>
            <div className={styles.tableParent}>
                <table>
                    <thead>
                        <tr>
                            <div>
                                <th>Status</th>
                                <th>Event Details</th>
                            </div>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableBodyItems.map((res, i) => (
                            <tr>
                                <div className={styles.statusevenadmin}>
                                    <td className={styles.rightstauts}><img src={right} /><div>{hideInfo === i && visible ? "*****" : res.status}</div></td>
                                    <div className={styles.statuseven}>
                                        <td>{hideInfo === i && visible ? "*****" : res.event}</td>
                                        <td>{hideInfo === i && visible ? "*****" : res.admin}</td>
                                    </div>
                                </div>
                                <div className={styles.statusevenadminbody}>
                                    <td>
                                        <img src={eye} onClick={() => hideInfoFn(i)} />
                                    </td>
                                    <td className={styles.statusarrow}>
                                        <img src={download} onClick={() => downloadCSV([res])} />
                                    </td>
                                </div>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

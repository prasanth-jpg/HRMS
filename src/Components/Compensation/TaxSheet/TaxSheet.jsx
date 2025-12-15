import React, { useState } from "react";
import NewTaxRegime from "./NewTaxRegime";
import PreviewModal from "./PreviewModal";
import IncomeTaxComputationModal from "./IncomeTaxComputationModal";

import styles from "./TaxSheet.module.css";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#ccd3d6",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Basic", 159, 6.0, 24, 4.0),
  createData("HRA", 237, 9.0, 37, 4.3),
  createData("Other Allownaces", 262, 16.0, 24, 6.0),
  createData("Total Extra Payments", 305, 3.7, 67, 4.3),
  createData("Gross Salary(A)", 356, 16.0, 49, 3.9),
  createData("Deduction", 356, 16.0, 49, 3.9),
  createData("Provident Fund", 356, 16.0, 49, 3.9),
  createData("Professional Tax", 356, 16.0, 49, 3.9),
  createData("TDS", 356, 16.0, 49, 3.9),
  createData("Total Deductions(B)", 356, 16.0, 49, 3.9),
];

const months = [
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


export default function TaxSheet({ showValues }) {
  const [openNewTaxModal, setOpenNewTaxModal] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [openComputation, setOpenComputation] = useState(false);

  const grossRow = rows.find((r) => r.name === "Gross Salary(A)");
  const monthlyEarnings = grossRow ? Number(grossRow.calories) : 0;

  const dummyPDF =
    "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";


  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Income Tax sheet", 14, 15);

    const tableColumn = [
      "Particulars",
      "Earnings",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]

    const tableRows = rows.map((row) => [
      row.name
      ,
      showValues ? "****" : row.calories,
      showValues ? "****" : row.fat,
      showValues ? "****" : row.carbs,
      showValues ? "****" : row.protein,
      showValues ? "****" : row.calories,
      showValues ? "****" : row.calories,
      showValues ? "****" : row.calories,
    ])

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 25,
    })

    doc.save("TaxSheet.pdf")
  }

  return (
    <div className={styles.taxSheetMainDv}>
      <div className={styles.taxSheetMainbtndis}>
        <div className={styles.taxSheetIncome}>
          <div className={styles.taxSheetIncomebtn}>
            <div className={styles.taxSheetIncomebtn2}>Taxsheet</div>

            <div
              className={styles.taxSheetIncomebtn4}
              onClick={() => setOpenComputation(true)}
              role="button"
            >
              Income Tax Computation sheet
            </div>
          </div>

          <div
            className={styles.taxSheetnew}
            onClick={() => setOpenNewTaxModal(true)}
            role="button"
          >
            New Tax Regime
          </div>
        </div>

        <div className={styles.taxSheetcurnry}>
          <div className={styles.taxSheetcurnry2}>Currency: INR</div>

          <div
            className={styles.taxSheetcurnry3}
            onClick={() => setOpenPreview(true)}
            role="button"
          >
            Preview
          </div>

          <div className={styles.taxSheetcurnry4}>
            <Button variant="contained" sx={{ padding: 0 }} onClick={handleDownloadPDF}>

              Download
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.taxSheetatble}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Particulars</StyledTableCell>
                <StyledTableCell align="right">Earnings</StyledTableCell>
                {months.map((m) => (
                  <StyledTableCell align="right" key={m}>
                    {m}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.fat}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.carbs}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.protein}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.fat}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.carbs}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.protein}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {!showValues ? "****" : row.protein}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <NewTaxRegime
          open={openNewTaxModal}
          setOpen={setOpenNewTaxModal}
          items={{ Earnings: monthlyEarnings }}
        />

        <PreviewModal
          open={openPreview}
          setOpen={setOpenPreview}
          rows={rows}
          showValues={showValues}
          months={months}
        />

        <IncomeTaxComputationModal
          open={openComputation}
          setOpen={setOpenComputation}
          rows={rows}
          showValues={showValues}
        />
      </div>
    </div>
  );
}

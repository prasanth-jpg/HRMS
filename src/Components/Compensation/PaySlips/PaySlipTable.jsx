import React, { useMemo, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography } from '@mui/material';
import styles from "./PaySlips.module.css";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"

const rows = [
  { id: "Sep 2025", payslips: 'Regular', TotalWorking: 500, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "Aug 2025", payslips: 'Regular', TotalWorking: 300, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "Jul 2025", payslips: 'Regular', TotalWorking: 800, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "Jun 2025", payslips: 'Regular', TotalWorking: 290, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "May 2025", payslips: 'Regular', TotalWorking: 900, Gross: 300, Deduction: 300, TDS: 300 },
  { id: "Apr 2025", payslips: 'Regular', TotalWorking: 290, Gross: 150, Deduction: 300, TDS: 300 },
];

export default function PaySlipTable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const handleView = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

function createData(id,name, calories, fat, carbs, protein) {
  return {id, name, calories, fat, carbs, protein };
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


      const handleDownloadPDF = () => {
        const doc = new jsPDF();
    
        doc.setFontSize(16);
        doc.text("Income Tax sheet", 14, 15);
    
        const tableColumn = [
          "field",
          "headerName",
          "width",
        ]
    
        const tableRows = rows.map((row) => [
          row.name,
         row.calories,
         row.fat,
         row.carbs,
         row.protein,
         row.calories,
         row.calories,
         row.calories,
        ])
    
        autoTable(doc, {
          head: [tableColumn],
          body: tableRows,
          startY: 25,
        })
    
        doc.save("Payslip.pdf")
      }
    

  const columns = useMemo(() => [
    { field: 'id', headerName: 'For Period', width: 150 },
    { field: 'payslips', headerName: 'Pay Slip Type', width: 150 },
    { field: 'TotalWorking', headerName: 'Total Working Hours', type: 'number', width: 160 },
    { field: 'Gross', headerName: 'Gross', type: 'number', width: 120 },
    { field: 'Deduction', headerName: 'Deduction', type: 'number', width: 120 },
    { field: 'TDS', headerName: 'TDS', type: 'number', width: 120 },
    {
      field: 'Actions',
      headerName: 'Actions',
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        const row = params.row;
        return (
          <div style={{ display: "flex", gap: 10 }} className={styles.viewbtns}>
            <Button
              variant='outlined'
              size="small"
              sx={{ width: 80 }}
              onClick={() => handleView(row)}
            >
              View
            </Button>

            <Button
              variant='outlined'
              size="small"
              sx={{ width: 100, padding: 0 }}
              onClick={handleDownloadPDF}
            >

                Download
            </Button>
          </div>
        );
      }
    }
  ], []);

  return (
    <>
      <Paper sx={{ width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel: { page: 0, pageSize: 5 } } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableColumnFilter
          disableColumnMenu
          disableColumnSorting
          className={styles.mydatagrid}
          sx={{
            border: 0,
            '& .MuiTablePagination-actions': { display: "none" },
            '& .MuiTablePagination-displayedRows': { display: "none" },
            '& .MuiDataGrid-iconButtonContainer': { opacity: "1" },
            '& .MuiDataGrid-columnHeader': { backgroundColor: "#fff" },
            '& .MuiDataGrid-columnHeader:hover': { backgroundColor: "transparent" }
          }}
        />
      </Paper>

      {/* VIEW MODAL */}
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Pay Slip — {selectedRow?.id ?? ""}</DialogTitle>

        <DialogContent dividers>
          {selectedRow ? (
            <div style={{ display: "grid", gap: 8 }}>
              <Typography><strong>For Period:</strong> {selectedRow.id}</Typography>
              <Typography><strong>Pay Slip Type:</strong> {selectedRow.payslips}</Typography>
              <Typography><strong>Total Working Hours:</strong> {selectedRow.TotalWorking}</Typography>
              <Typography><strong>Gross:</strong> {selectedRow.Gross}</Typography>
              <Typography><strong>Deduction:</strong> {selectedRow.Deduction}</Typography>
              <Typography><strong>TDS:</strong> {selectedRow.TDS}</Typography>
            </div>
          ) : (
            <Typography>No Data</Typography>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

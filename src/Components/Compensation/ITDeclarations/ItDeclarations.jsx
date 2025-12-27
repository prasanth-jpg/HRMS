 import React, { useEffect, useState } from "react";
import styles from "./ItDeclarations.module.css";
import TaxModal from "./TaxModal";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export const ItDeclarations = () => {
  const [activeHouseParty, setactiveHouseParty] = useState("");
  const [openCompareTax, setOpenCompareTax] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [openTxt, setOpenTxt] = React.useState("");

  useEffect(() => {
    setactiveHouseParty("HouseParty");
  }, []);

  return (
    <div className={styles.ItDeclarationsContainer}>
      <div className={styles.ItDeclarations}>
        <div className={styles.firstdiv}>
          <div className={styles.TotalFinancial}>
            <div className={styles.Financial}>
              <div className={styles.FinancialYearParent}>
                <p className={styles.FinancialYear}> IT Declaration for the Financial Year 2025-2026 </p>
                <span>CLOSED</span>
              </div>
              <p className={styles.NoFinancialYear}>Go Ahead with New Tax Regime (No tax Exemption/ Deductions Under Section 115BAC):
                <span>NEW</span>
              </p>
            </div>
            <div className={styles.HouseParty}>
              <div className={`${styles.Others} ${activeHouseParty === "HouseParty" ? styles.activebtn : ""}`} onClick={() => setactiveHouseParty("HouseParty")} >
                House Party(U/S 24)
              </div>

              <div className={`${styles.Others} ${activeHouseParty === "HouseParty80" ? styles.activebtn : ""}`} onClick={() => setactiveHouseParty("HouseParty80")} >
                Investment Declaration (U/S 80) & Others
              </div>

              <div className={`${styles.Others} ${activeHouseParty === "Others" ? styles.activebtn : ""}`} onClick={() => setactiveHouseParty("Others")} >
                Others
              </div>
            </div>
          </div>
          <div className={styles.comparebuttons}>
            <Button variant="contained" sx={{ backgroundColor: "#8a80fb" }} onClick={() => setOpenCompareTax(true)}>COMPARE TAX</Button>
            <Button variant="outlined"><a href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" download > Form 12BB </a> </Button>
          </div>
        </div>
      </div>
      {
        activeHouseParty === "HouseParty" && <div className={styles.section2}>
          <div className={styles.section}>
            SECTION 24 - INTEREST PAID ON HOUSING LOAN FOR A LET-OUT PROPERTY
            <span>(QUALIFIED AMOUNT: 200000 INR) &#9432;</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.Notenegative}>
            Note: Negative Values in Amount indicates Amount paid and hence will be
            considered for exemption.
          </div>
          <div className={styles.viewversions} onClick={() => { setOpenTxt("VERSIONS OF IT DECLARATION NOT AVAILABLE");setOpen(true) }}>VIEW VERSIONS OF IT DECLARATION <span>(0)</span></div>
          <div className={styles.viewversions}  onClick={() => { setOpenTxt("VERSIONS OF POI NOT AVAILABLE");setOpen(true) }}>VIEW VERSIONS OF POI <span>(0)</span></div>
        </div>
      }

      {
        activeHouseParty === "HouseParty80" && <div className={styles.section2}>
          <div className={styles.section}>
            Investment Declaration (U/S 80) & Others
            <span>(QUALIFIED AMOUNT: 200000 INR) &#9432;{" "}</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.Notenegative}>
            Note: Negative Values in Amount indicates Amount paid and hence will be
            considered for exemption.
          </div>
          <div className={styles.viewversions} onClick={() => { setOpenTxt("VERSIONS OF IT DECLARATION NOT AVAILABLE");setOpen(true) }}>VIEW VERSIONS OF IT DECLARATION <span>(0)</span></div>
          <div className={styles.viewversions} onClick={() => { setOpenTxt("VERSIONS OF POI NOT AVAILABLE");setOpen(true) }}>VIEW VERSIONS OF POI <span>(0)</span></div>
        </div>
      }

      {
        activeHouseParty === "Others" && <div className={styles.section2}>
          <div className={styles.section}>
            OTHER PAYABLE TAXES
            <span>(QUALIFIED AMOUNT: 200000 INR) &#9432;{" "}</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.Notenegative}>
            Note: Negative Values in Amount indicates Amount paid and hence will be
            considered for exemption.
          </div>
          <div className={styles.viewversions} onClick={() => { setOpenTxt("VERSIONS OF IT DECLARATION NOT AVAILABLE");setOpen(true) }}>VIEW VERSIONS OF IT DECLARATION <span>(0)</span></div>
          <div className={styles.viewversions} onClick={() => { setOpenTxt("VERSIONS OF POI NOT AVAILABLE");setOpen(true) }}>VIEW VERSIONS OF POI <span>(0)</span></div>
        </div>
      }

      <TaxModal openCompareTax={openCompareTax} setOpenCompareTax={setOpenCompareTax} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className={styles.addResume}>{openTxt}</p>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

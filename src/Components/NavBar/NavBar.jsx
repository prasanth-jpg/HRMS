import search from "../../assets/srchicon.png";
import notif from "../../assets/notif.png";
import clockin from "../../assets/clockin.png";
import logoaccess from "../../assets/logoaccess.png";
import menu from "../../assets/menu.png";
import more from "../../assets/more.png";
import backbtn from "../../assets/leftarrow.png";

import { useNavigate } from "react-router-dom";

import Style from "../AccessPage/Acesspage.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

import styles from "./NavBar.module.css";
import DashBoardSideBar from "../DashBoardSideBar/DashBoardSideBar";

const NavBar = ({ qrlocation }) => {
  const [date, setDate] = useState(new Date());
  const [clockTime, setClocktime] = useState(null);
  console.log("date", date);
  const today = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    weekday: "long",
  });
  const time = (date) =>
    date.toLocaleTimeString("en-GB", {
      hour12: false,
    });
  const onclickfun = () => {
    setClocktime(time(new Date()));
  };

  const [showNoti, setShowNoti] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const [showDashboard, setShowDashBoard] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const handleNoti = () => {
    setShowNoti((prev) => !prev);
    setShowPro(false);
  };

  const handlePro = () => {
    setShowPro((prev) => !prev);
    setShowNoti(false);
  };

  const handleQr = () => {
    navigate("/QrCode");
    setShowPro(false);
  };

  const onclickMenu = () => {
    setShowMenu((prev) => !prev);
  };
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width >= 720) {
      setShowMenu(false);
    }
  }, [width]);
  return (
    <div className={Style.container}>
      <div className={Style.navbar}>
        <div className={Style.navbarChild}>
          <div className={Style.logo}>
            <img
              src={backbtn}
              className={Style.logobck}
              onClick={() => {
                navigate(-1);
              }}
            />
            {qrlocation ? (
              <img
                src={menu}
                alt="menu"
                onClick={() => {
                  setShowDashBoard(true);
                }}
              />
            ) : (
              <Link to="/accesspage">
                <img src={logoaccess} alt="logo" className={Style.logobck2} />
              </Link>
            )}
          </div>
          <div className={Style.inputsrch}>
            <input
              type="text"
              placeholder="search by Employee Name, Designation, Department..."
            ></input>
            <div className={Style.profileIconSrch}>
              <img src={search} alt="search" />
            </div>
          </div>
          <div className={Style.profilemore2}>
            <div className={Style.profilemore} onClick={() => onclickMenu()}>
              <img src={more} />
            </div>
            <div className={`${showMenu ? Style.profile : Style.profileHide}`}>
              <div>{clockTime ? clockTime : "00:00:00"}</div>
              <div
                className={Style.profileIconclock}
                onClick={() => onclickfun()}
              >
                <img src={clockin} alt="clockin" />
              </div>
              <div
                className={Style.profileIconnotifi}
                onClick={() => handleNoti()}
              >
                <img src={notif} alt="notif" />
                <span className={styles.noticount}>6</span>
              </div>
              <div className={Style.profileicon} onClick={() => handlePro()}>
                <img src={notif} alt="notif" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNoti ? (
        <div className={Style.notification}>
          <div className={styles.notificationtext}>Notifications</div>
          <div className={Style.notificat}>
            <div className={styles.notificat1}>
              <div></div>
              <p>Payslip released</p>
            </div>
            <div className={styles.notificat1}>
              <div></div>
              <p>Leave Approved</p>
            </div>
            <div className={styles.notificat1}>
              <div></div>
              <p>Comp off Approved</p>
            </div>
            <div className={styles.notificat1}>
              <div></div>
              <p>Performance report</p>
            </div>
            <div className={styles.notificat1}>
              <div></div>
              <p>MSF Feedback Recived</p>
            </div>
          </div>
        </div>
      ) : null}
      {showPro ? (
        <div className={styles.profileNoti}>
          <div className={styles.notificat}>
            <div className={styles.notificatcontainer}>
              <div className={styles.profileicon2}></div>
              <div className={styles.profileicon2BTN} onClick={() => { navigate("/profile/Overview"); setShowPro(false) }}>
                <Button variant="contained">VIEW PROFILE</Button>
              </div>
              <div className={styles.MobileQR} onClick={() => handleQr(true)}>
                <img />
                <p>Mobile QR Code</p>
              </div>
              <div className={styles.MobileQR} onClick={() => { navigate("/"); setShowPro(false) }}>
                <img />
                <p >Logout</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {
        <DashBoardSideBar
          isOpen={showDashboard}
          onClose={() => setShowDashBoard(false)}
        />
      }
    </div>
  );
};

export default NavBar;

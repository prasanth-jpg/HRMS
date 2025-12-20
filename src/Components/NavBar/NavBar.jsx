import search from "../../assets/srchicon.png";
import notif from "../../assets/notif.png";
import clockin from "../../assets/clockin.png";
import logoaccess from "../../assets/logoaccess.png";
import menu from "../../assets/menu.png";
import more from "../../assets/more.png";
import backbtn from "../../assets/leftarrow.png";
import addicon from "../../assets/addicon.png";
import profile from "../../assets/profile.png";
// import download from '../../assets/download.png'
import { useNavigate } from "react-router-dom";
import Style from "../AccessPage/Acesspage.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";

import styles from "./NavBar.module.css";
import DashBoardSideBar from "../DashBoardSideBar/DashBoardSideBar";
import NavBarModal from "./NavBarModal";

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
  const [searchData, setSearchData] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const [showDashboard, setShowDashBoard] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const [openPreview, setOpenPreview] = useState(false);

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

  const handleclick = (e) => {
    setSearchInput(e.target.value);
    setOpenPreview(true);
    if (searchInput === "") {
      setOpenPreview(false);
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/profile/profileGet")
      .then((res) => res.json())
      .then((data) => {
        console.log("fd", data);
        setSearchData(data);
      });
  }, []);

  useEffect(() => {
    if (!Array.isArray(searchData)) return;
    const pp = searchData.filter((e) =>
      e.FirstName?.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResult(pp);
    console.log("sssssss", pp);
  }, [searchInput, searchData]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowPro(false);
      }
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNoti(false);
      }
    };
    if (showPro || showNoti) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPro, showNoti]);

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
              value={searchInput}
              onChange={(e) => handleclick(e)}
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
              <div className={styles.profileIconclock} onClick={onclickfun}>
                <img src={clockin} />
              </div>

              <div className={styles.profileIconnotifi} onClick={handleNoti}>
                <img src={notif} />
                <span className={styles.noticount}>6</span>
              </div>

              <div className={styles.profileicon} onClick={handlePro}>
                <img src={profile} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showNoti ? (
        <div ref={notificationRef} className={Style.notification}>
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
        <div ref={profileRef} className={styles.profileNoti}>
          <div className={styles.notificat}>
            <div className={styles.notificatcontainer}>
              <div className={styles.iconandname}>
                <div className={styles.profileicon2}></div>
                <div> Gandarth Pranitha</div>
              </div>
              <div
                className={styles.profileicon2BTN}
                onClick={() => {
                  navigate("/profile/Overview");
                  setShowPro(false);
                }}
              >
                <Button variant="contained">VIEW PROFILE</Button>
              </div>
              <div className={styles.MobileQR} onClick={() => handleQr(true)}>
                <img src={addicon} />
                <p>Mobile QR Code</p>
              </div>
              <div
                className={styles.MobileQR}
                onClick={() => {
                  navigate("/");
                  setShowPro(false);
                }}
              >
                <img src={addicon} />
                <p>Logout</p>
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
      {searchResult.length === 1 ? (
        <NavBarModal
          open={openPreview}
          setOpen={setOpenPreview}
          rows={searchResult}
          showValues={true}
          // months={months}
        />
      ) : null}
    </div>
  );
};

export default NavBar;

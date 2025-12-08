import accessPageObject from "./AccessPageData";

import { useNavigate } from "react-router-dom";

import Style from "./Acesspage.module.css";
import { useState } from "react";

const Accesspage = () => {
  const access = accessPageObject();
  const navigate = useNavigate();
  const [navigateTopage, setNavigateTopage] = useState("");

  const navigateFn = (nav) => {
    // setNavigateTopage(nav)
    if (nav === "Attendance") {
      navigate("/Attendance/attendence")
    }
    else if (nav === "Performance") {
      navigate("/Performance/overview")
    }
    else if (nav === "Reimbursement") {
      navigate("/Reimbursement/overview")
    }
    else if (nav === "Flows") {
      navigate("/Flow/flowRequest")
    }
    else if (nav === "Calendar") {
      navigate("/Attendance/attendence")
    }
    else if (nav === "Compensation") {
      navigate("/Compensation")
    }
    else if (nav === "Time Management") {
      navigate("/Attendance/overview")
    }
    else if (nav === "Task Box") {
      navigate("/TaskBox")
    }
    else if (nav === "Employees") {
      navigate("/profile/Overview")
    }
    else if (nav === "HR Documents") {
      navigate("/HRDocuments")
    }
    else if (nav === "Org View") {
      navigate("/OrgView")
    }
  }

  return (
    <div className={Style.container}>
      <div className={Style.dashboardContainer}>
        <div className={Style.access}><span><p>My Access</p></span></div>
        <div className={Style.dashboard}>
          {access.map((card, i) => (
            <div className={Style.card} key={i}>
              <div className={Style.imageCard} onClick={() => navigateFn(card.title)}>
                <img src={card.img} alt={card.title} />
              </div>
              <p>{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accesspage;

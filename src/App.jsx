import "./App.css";
import Login from "./Components/Login/Login";
import Accesspage from "./Components/AccessPage/Accesspage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import NavBar from "./Components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import ProfilePage from "./Components/Profile/ProfilePage";
import LeaveBalance from "./Components/Leave/LeaveBalance/LeaveBalance";
import AttendanceOverview from "./Components/AttendanceOverview/AttendanceOverview";
import Interviews from "./Components/Interviews/Interviews";
import Performance from "./Components/Performance/Performance";
import InterviewMainpage from "./Components/InterviewMainpage/InterviewMainpage";
import IndividualFeedBack from "./Components/IndividualFeedBack/IndividualFeedBack";
import { Compensation } from "./Components/Compensation/Compensation";
import KeyResults from "./Components/Performance/keyResults/KeyResults";
import MyGoal from "./Components/Performance/MyGoal/MyGoal";
import GoalReview from "./Components/Performance/GoalReview/GoalReview";
import Hrdocsdocument from "./Components/Performance/Hrdocsdocument/Hrdocsdocument";
import FeedbackPage from "./Components/Performance/FeedbackPage/FeedbackPage";
import PerformanceHistory from "./Components/Performance/TabsTabs/PerformanceHistory";
import MsfHistory from "./Components/Performance/MSFHistory/MsfHistory";
import OverView from "./Components/Overview/OverView";
import Confirmation from "./Components/Flow/Confirmation/Confirmation";
import Reimbursement from "./Components/Overview/Reimbursement/Reimbursement";
import Benefits from "./Components/Benefits/Benefits";
import Attendence from "./Components/TimeManagemnet/Attendence/Attendence";
import Documents from "./Components/Profile/Documents/Documents";
import EmploymentDetails from "./Components/Profile/EmploymentDetails/EmploymentDetails";
import PersonalDetails from "./Components/Profile/PersonalDetails/PersonalDetails";
// import IndividualFeedBack from "./Components/IndividualFeedBack/IndividualFeedBack";
import QRcodePage from "./Components/QRcode/QRcodePage";
import FlowRequest from "./Components/Flow/FlowRequest/FlowRequest";
import Separation from "./Components/Flow/Separation/Separation";
import { AttendanceProvider } from "./context/AttendanceContext";
import AdvanceTab from "./Components/Overview/AdvanceTab/AdvanceTab";
import TaskBox from "./Components/TaskBox/TaskBox";
import HRDocuments from "./Components/HRDocuments/HRDocuments";
import OrgView from "./Components/OrgView/OrgView";

function LayoutApp() {
  const location = useLocation();
  const pathLocation =
    location.pathname === "/accesspage" || location.pathname === "/";
  const navlocation = location.pathname === "/";

  const qrlocation = location.pathname === "/QrCode"

  return (
    <>
      {!navlocation && <NavBar qrlocation={qrlocation} />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accesspage" element={<Accesspage />} />
      </Routes>
      {!qrlocation && <div className="content">
        {!pathLocation && <SideNavbar />}
        <Routes className="flowroute">
          <Route path="/profile/Overview" element={<ProfilePage />} />
          <Route path="/profile/Documents" element={<Documents />} />
          <Route path="/profile/EmploymentDetails" element={<EmploymentDetails />} />
          <Route path="/profile/PersonalDetails" element={<PersonalDetails />} />


          <Route path="/Attendance/leave" element={<LeaveBalance />} />
          <Route path="/Attendance/Overview" element={<AttendanceOverview />} />
          <Route path="/Interviews" element={<InterviewMainpage />} />
          <Route path="/Performance/overview" element={<Performance />} />
          <Route path="/Interviews/candidate" element={<Interviews />} />
          <Route
            path="/Interviews/individualFeedBack"
            element={<IndividualFeedBack />}
          />
          <Route path="/compensation" element={<Compensation />} />
          <Route path="/Performance/keyResults" element={<KeyResults />} />
          <Route path="/Performance/myGoal" element={<MyGoal />} />
          <Route path="/Performance/Review" element={<GoalReview />} />
          <Route path="/Performance/MSF" element={<Hrdocsdocument />} />
          <Route path="/Performance/Feedback" element={<FeedbackPage />} />
          <Route
            path="/Performance/Assessment"
            element={<PerformanceHistory />}
          />
          <Route path="/Performance/MsfHistory" element={<MsfHistory />} />
          <Route path="/Reimbursement/overview" element={<OverView />} />
          <Route path="/Flow/Confirmation" element={<Confirmation />} />
          <Route
            path="/Reimbursement/Reimbursement"
            element={<Reimbursement />}
          />
          <Route path="/Reimbursement/Advances" element={<AdvanceTab />} />
          <Route path="/Benefits" element={<Benefits />} />
          <Route path="/Attendance/attendence" element={<Attendence />} />
          <Route path="/Flow/flowRequest" element={<FlowRequest />} />
          <Route path="/Flow/Separation" element={<Separation />} />
          <Route path="/TaskBox" element={<TaskBox />} />
          <Route path="/HRDocuments" element={<HRDocuments />} />
          <Route path="/OrgView" element={<OrgView />} />
        </Routes>
      </div>}
      <Routes>
        <Route path="/QrCode" element={<QRcodePage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <AttendanceProvider>
      <Router>
        <LayoutApp />
      </Router>
    </AttendanceProvider>

  );
}

export default App;

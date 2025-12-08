import employeeicon from "../../assets/employees.png";
import reimbursement from "../../assets/reimbursement.png";
import compensation2 from "../../assets/compensation2.png";
import attendance from "../../assets/attendance.png";
import HrPolicies from "../../assets/Hr-Policies.png";
import hrdocuments from "../../assets/hr-documents-new.png";
import performance from "../../assets/performance.png";
import OrgView from "../../assets/OrgView.png";
import Flows from "../../assets/Flows.png";
import calendarcimg from "../../assets/calendarc-img.png";
import performanceCalender from "../../assets/performance.png";
import taskbar from "../../assets/taskbar.png"

export default function accessPageObject() {
    return [
        {
            id:1,
            img: taskbar,
            title: "Task Box",
        },
        {
            id:2,
            img: employeeicon,
            title: "Employees",
        },
        {
            id:3,
            img: reimbursement,
            title: "Reimbursement",
        },
        {
            id:4,
            img: compensation2,
            title: "Compensation",
        },
        {
            id:5,
            img: attendance,
            title: "Time Management",
        },
        {
            id:6,
            img: hrdocuments,
            title: "HR Documents",
        },
        {
            id:7,
            img: calendarcimg,
            title: "Calendar",
        },
        {
            id:8,
            img: OrgView,
            title: "Org View",
        },
        {
            id:9,
            img: Flows,
            title: "Flows",
        },
        {
            id:10,
            img: performanceCalender,
            title: "Performance",
        },
    ];
} 
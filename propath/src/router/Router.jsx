import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";

//dashboard Layout
import DashboardLayout from "../layout/Dashboard";

//jobprovider
import JPCompnaySetup1 from "../pages/jobprovider/CompanySetup/CompanyInfo";
import JpHome from "../pages/jobprovider/dashboard/Home";
import JpDashboard from "../pages/jobprovider/dashboard/Dashboard";
import JpPostAJob from "../pages/jobprovider/dashboard/PostaJob";
import JpMyJobs from "../pages/jobprovider/dashboard/MyJob";
import JpPlansAndBilling from "../pages/jobprovider/dashboard/PlanAndBilling";
import JpMeetUp from "../pages/jobprovider/dashboard/MeetUp";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        }
      ]
    },
    {
      path: "/Jobprovider",
      element: <JPCompnaySetup1/>,
      children: [
        {
          path:"Setup",
          element:<JPCompnaySetup1/>
        }
      ]
    },
    {
      path: "/jobprovider",
      element: <DashboardLayout/>,
      children: [
        {
          path:"/jobprovider",
          element: <Navigate to="/jobprovider/home/" replace />
        },
        {
           path:"home",
           element:<JpHome/>
           
        },
        {
          path:"dashboard",
          element:<JpDashboard/>
        },
        {
          path:"post-a-job",
          element:<JpPostAJob/>
        },
        {
          path:"my-jobs",
          element:<JpMyJobs/>
        },
        {
          path:"plans-and-billing",
          element:<JpPlansAndBilling/>
        },
        {
          path:"meet-up",
          element:<JpMeetUp/>
        }
      ]
    },
   
]);

export default router
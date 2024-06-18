import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";

//dashboard Layout
import DashboardLayout from "../layout/Dashboard";

//jobprovider
import MainPage from "../components/JobProvider/CompanySetup1/MainPage";
import JpHome from "../pages/jobprovider/dashboard/Home";
import JpDashboard from "../pages/jobprovider/dashboard/Dashboard";
import JpPostAJob from "../pages/jobprovider/dashboard/PostaJob";
import JpMyJobs from "../pages/jobprovider/dashboard/MyJob";
import JpPlansAndBilling from "../pages/jobprovider/dashboard/PlanAndBilling";
import JpMeetUp from "../pages/jobprovider/dashboard/MeetUp";
import JobSeekerHome from "../pages/jobseeker/JobSeekerHome";


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
      element: <MainPage/>,
      children: [
        {
          path:"Setup",
          element:<MainPage/>
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

    

      {
        path: "/jobseeker",
        element: <JobSeekerHome/>,
        children: [
          
        ]
      }

    
   
]);

export default router
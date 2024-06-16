import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import MainPage from "../components/JobProvider/CompanySetup1/MainPage";

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
      path: "/JobProvider",
      element: <MainPage/>,
      children: [
        {
          path:"Setup",
          element:<MainPage/>
        }
      ]
    }
   
]);

export default router
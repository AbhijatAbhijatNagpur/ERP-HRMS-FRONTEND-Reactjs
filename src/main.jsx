import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./component/Surgisol/Dashboard.jsx";
import AllNotification from "./component/Surgisol/DashboardCompo/AllNotification.jsx";
import CoreHR from "./component/Surgisol/CoreHR.jsx";
import EmpDashboard from "./component/Employee/EmpDashboard.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/empdashboard" element={<EmpDashboard />} />
      {/* <Route path="dashboard" element={<Dashboard />} />
      <Route path="allnotification" element={<AllNotification />} />
      <Route path="corehr" element={<CoreHR />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

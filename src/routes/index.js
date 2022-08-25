import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import Dashboard from "../pages/Dashboard";
import { Doctor, Patient, Nomatch } from "../components";
import ProtectedRoutes from "./ProtectedRoutes";

const router = (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route element={<ProtectedRoutes />}>
      {/* <Route exact path="/dashboard" element={<Dashboard />} /> */}
      <Route exact path="/doctor" element={<Doctor />} />
      <Route exact path="/patient" element={<Patient />} />
    </Route>
    <Route exact path="*" element={<Nomatch />} />
  </Routes>
);

export default router;

import { Navigate, Route, Routes, Outlet } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

/* IMPORT ROUTES */
import {
  ERROR_404_PAGE,
  NAVIGATE_TO_ADMINCA,
  NAVIGATE_TO_ADMINDASHBOARD,
  NAVIGATE_TO_ADMINRESULTS,
  NAVIGATE_TO_ADMINSCHOOL,
  NAVIGATE_TO_ADMINTEACHERPAGE,
  NAVIGATE_TO_STUDENTDASHBOARD,
  NAVIGATE_TO_LOGINPAGE,
} from "./types";
import {
  AdminCaPage,
  AdminDashboard,
  AdminResultsPage,
  AdminSchoolPage,
  AdminStudentPage,
  AdminTeacherPage,
  LoginPage,
} from "../pages";
import Layout from "../components/Layout";

const ProtectedRoute = () => {
  const user = useSelector((state: any) => state.auth?.user?.user ?? null);

  return user ? <Outlet /> : <Navigate to={NAVIGATE_TO_LOGINPAGE} replace />;
};

/* Group of protected routes */
const RoutesContainer = () => {
  return (
    <Routes>
      {/* Public route (Login page doesn't need Layout) */}
      <Route path={NAVIGATE_TO_LOGINPAGE} element={<LoginPage />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Navigate to={NAVIGATE_TO_ADMINDASHBOARD} replace />}
          />
          <Route
            path={NAVIGATE_TO_ADMINDASHBOARD}
            element={<AdminDashboard />}
          />
          <Route path={NAVIGATE_TO_ADMINSCHOOL} element={<AdminSchoolPage />} />
          <Route
            path={NAVIGATE_TO_STUDENTDASHBOARD}
            element={<AdminStudentPage />}
          />
          <Route
            path={NAVIGATE_TO_ADMINRESULTS}
            element={<AdminResultsPage />}
          />
          <Route path={NAVIGATE_TO_ADMINCA} element={<AdminCaPage />} />
          <Route
            path={NAVIGATE_TO_ADMINTEACHERPAGE}
            element={<AdminTeacherPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesContainer;

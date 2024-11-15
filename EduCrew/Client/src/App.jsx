import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import Dashboard from "./pages/dashboard/landingPage";
import GroupView from "./pages/dashboard/group";
import DashboardLayout from "./pages/dashboard/DashboardLayout";
import CalendarPage from "./pages/dashboard/calender";
import ResourcesPage from "./pages/dashboard/resources";
import LoginPage from "./pages/login/login";

import SignupPage from "./pages/login/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/profile/profile";
import CreateStudyGroupForm from "./pages/dashboard/CreateStudyGroupForm";
import VideoCallPage from "./pages/dashboard/videoCall";
import TaskPage from "./pages/dashboard/task";
import ChatPage from "./pages/dashboard/chat";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/sign-in" element={<LoginPage />} />
        <Route path="/sign-up" element={<  SignupPage />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />


          {/* Dashboard routes nested under layout */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Index route for dashboard */}
            <Route index element={<Dashboard />} />

            {/* Dashboard sub-routes */}
            <Route path="group" element={<GroupView />} />
            <Route path="chat" element={<ChatPage/>} />
            <Route path="tasks" element={<TaskPage/>} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="video-calls" element={<VideoCallPage/>} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="group-form" element={<CreateStudyGroupForm />} />
          </Route>

        </Route>

        {/* Catch-all route for 404 - place it last */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
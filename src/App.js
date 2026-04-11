import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import StudentLogin from "./pages/StudentLogin";
import StudentPage from "./pages/StudentPage";
import InstructorLogin from "./pages/InstructorLogin";
import InstructorClasses from "./pages/InstructorClasses";
import InstructorDashboard from "./pages/InstructorDashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/student" element={<StudentPage />} />

      <Route path="/instructor-login" element={<InstructorLogin />} />
      <Route path="/instructor/classes" element={<InstructorClasses />} />
      <Route path="/instructor/dashboard" element={<InstructorDashboard />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
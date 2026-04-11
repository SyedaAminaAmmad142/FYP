import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

// Temporary pages (so routes don’t crash)
const Login = () => <h1>Login Page</h1>;
const StudentLogin = () => <h1>Student Login</h1>;
const InstructorLogin = () => <h1>Instructor Login</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/instructor-login" element={<InstructorLogin />} />
    </Routes>
  );
}

export default App;
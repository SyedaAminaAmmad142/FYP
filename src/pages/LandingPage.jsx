import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-50 relative overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-indigo-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-200 rounded-full blur-3xl opacity-40"></div>

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white/70 backdrop-blur-md border-b z-10">

        <h1 className="text-xl font-semibold text-indigo-600 tracking-wide">
          EduSense
        </h1>

        <div className="space-x-4">

          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 text-gray-600 font-medium hover:text-indigo-600 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>

        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <div className="flex flex-1 flex-col items-center justify-center text-center px-6 z-10">

        {/* Title */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-800 mb-6 tracking-tight">
          EduSense
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-gray-500 text-lg leading-relaxed">
          Transforming education through AI-powered engagement analysis.
          Understand student emotions in real-time and deliver smarter,
          personalized learning experiences.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <button
            onClick={() => navigate("/student-login")}
            className="px-8 py-3 bg-indigo-600 text-white rounded-2xl text-lg shadow-lg hover:scale-105 hover:bg-indigo-700 transition duration-300"
          >
            Join as Student
          </button>

          <button
            onClick={() => navigate("/instructor-login")}
            className="px-8 py-3 bg-white text-gray-800 border border-gray-200 rounded-2xl text-lg shadow-md hover:scale-105 hover:bg-gray-100 transition duration-300"
          >
            Instructor Login
          </button>

        </div>

        {/* Small footer text */}
        <p className="mt-10 text-sm text-gray-400">
          AI-powered Learning • Emotion Recognition • Smart Classrooms
        </p>

      </div>

    </div>
  );
}
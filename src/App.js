import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">

      {/* ================= NAVBAR ================= */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white border-b">

        <h1 className="text-2xl font-bold text-sky-300">EduSense</h1>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-600 hover:text-black text-sm"
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-sky-500 text-white rounded-lg text-sm hover:bg-sky-600"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="text-center px-6 py-24 bg-gradient-to-br from-sky-600 via-indigo-400 to-purple-200 text-gray-100">

        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Smarter Learning <br /> Through AI Insights
        </h1>

        <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-600">
          EduSense helps educators understand student engagement in real-time,
          enabling better teaching decisions and personalized learning experiences.
        </p>

        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100">
          Learn More
        </button>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-10 py-20 bg-white">

        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="p-6 border rounded-xl shadow-sm transition transform hover:-translate-y-2 hover:shadow-md">
            <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
              Image Here
            </div>
            <h3 className="text-xl font-semibold mb-2">Live Engagement</h3>
            <p className="text-gray-600">
              Monitor student attention and emotions during live sessions using AI.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border rounded-xl shadow-sm transition transform hover:-translate-y-2 hover:shadow-md">
            <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
              Image Here
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Feedback</h3>
            <p className="text-gray-600">
              Get intelligent suggestions to improve teaching effectiveness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border rounded-xl shadow-sm transition transform hover:-translate-y-2 hover:shadow-md">
            <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
              Image Here
            </div>
            <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
            <p className="text-gray-600">
              Visual dashboards to track student performance and engagement trends.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
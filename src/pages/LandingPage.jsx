import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white text-slate-900 overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <h1 className="text-3xl font-bold tracking-tight text-blue-600">
            EduSense
          </h1>

          <div className="hidden items-center gap-8 md:flex">
            <button className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">
              Features
            </button>
            <button className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">
              About
            </button>
            <button
              onClick={() => navigate("/login")}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate("/login")}
              className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Sign Up Free
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0B1B87] via-[#3E5CCF] to-[#B8B8F8]">
        <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center px-6 pt-16 pb-14 text-center lg:px-10">
          {/* Badge */}
          <div className="mb-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
            AI-Powered Learning Engagement Platform
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            See what students need
            <br />
            as they learn
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-3xl text-base leading-8 text-blue-50 md:text-xl">
            EduSense helps educators understand student engagement in real-time,
            identify confusion early, and create more personalized learning
            experiences through AI-powered insights.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/student-login")}
              className="rounded-2xl bg-[#08104D] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#050a34]"
            >
              Student Login
            </button>

            <button
              onClick={() => navigate("/instructor-login")}
              className="rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:scale-[1.02] hover:bg-slate-100"
            >
              Instructor Login
            </button>
          </div>

          {/* Small supporting text */}
          <p className="mt-6 text-sm text-blue-100">
            Real-time engagement • AI feedback • Smart analytics
          </p>

          {/* ================= PREVIEW CARDS ================= */}
          <div className="mt-16 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-[28px] bg-white/95 p-6 text-left shadow-xl backdrop-blur">
              <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 p-4 text-white">
                <p className="text-sm font-medium text-blue-100">
                  Live Engagement
                </p>
                <div className="mt-6">
                  <p className="text-xs text-blue-100">Attention Score</p>
                  <div className="mt-2 h-3 rounded-full bg-white/20">
                    <div className="h-3 w-[82%] rounded-full bg-cyan-300"></div>
                  </div>
                  <p className="mt-2 text-sm font-semibold">82% Focused</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Live Engagement
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Monitor student attention and participation during live learning
                sessions using AI-driven analysis.
              </p>
            </div>

            <div className="rounded-[28px] bg-white/95 p-6 text-left shadow-xl backdrop-blur">
              <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-900 p-4 text-white">
                <p className="text-sm font-medium text-slate-300">
                  AI Feedback
                </p>
                <div className="mt-6 rounded-xl bg-white/10 p-3">
                  <p className="text-sm text-white">
                    Students show reduced focus.
                  </p>
                  <p className="mt-2 text-xs text-slate-300">
                    Suggestion: simplify explanation and add visual example.
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">AI Feedback</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Receive intelligent suggestions that help teachers adjust pace,
                examples, and teaching strategy instantly.
              </p>
            </div>

            <div className="rounded-[28px] bg-white/95 p-6 text-left shadow-xl backdrop-blur">
              <div className="mb-4 h-36 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-500 p-4 text-white">
                <p className="text-sm font-medium text-indigo-100">
                  Smart Analytics
                </p>
                <div className="mt-6 flex items-end gap-2">
                  <div className="h-12 w-6 rounded bg-white/30"></div>
                  <div className="h-20 w-6 rounded bg-white/40"></div>
                  <div className="h-16 w-6 rounded bg-white/30"></div>
                  <div className="h-24 w-6 rounded bg-cyan-300"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Smart Analytics
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                View class trends, performance summaries, and engagement
                patterns through simple visual dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
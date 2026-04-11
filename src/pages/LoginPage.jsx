export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">

      {/* Card */}
      <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-10 w-full max-w-md">

        {/* Title */}
        <h1 className="text-3xl font-semibold text-center text-slate-800 mb-2">
          EduSense Portal
        </h1>

        <p className="text-center text-slate-500 mb-8">
          Access your dashboard based on your role
        </p>

        {/* Buttons */}
        <div className="space-y-4">

          {/* Student */}
          <a
            href="/student-login"
            className="block w-full text-center bg-indigo-600 text-white py-3 rounded-xl text-base font-medium hover:bg-indigo-700 transition"
          >
            Student Login
          </a>

          {/* Instructor */}
          <a
            href="/instructor-login"
            className="block w-full text-center bg-slate-800 text-white py-3 rounded-xl text-base font-medium hover:bg-slate-900 transition"
          >
            Instructor Login
          </a>

        </div>

        {/* Footer note */}
        <p className="text-xs text-center text-slate-400 mt-8">
          Secure academic access system
        </p>

      </div>
    </div>
  );
}
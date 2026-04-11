export default function StudentLogin() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Join Lecture
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="text"
          placeholder="Enter Class Code"
          className="w-full p-3 border rounded mb-4"
        />

        <a
          href="/student"
          className="block text-center bg-blue-600 text-white p-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Join Lecture
        </a>
      </div>
    </div>
  );
}

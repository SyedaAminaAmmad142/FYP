export default function InstructorLogin() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 shadow-xl rounded-xl">

        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Instructor Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded mb-6"
        />

        <a
          href="/instructor/classes"
          className="block text-center bg-gray-800 text-white p-3 rounded-lg text-lg hover:bg-gray-900 transition"
        >
          Login
        </a>

      </div>
    </div>
  );
}

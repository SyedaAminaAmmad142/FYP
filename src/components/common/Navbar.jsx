export default function Navbar() {
  return (
    <div className="w-full bg-white shadow px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">EduSense</div>

      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Join Lecture
        </button>
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}

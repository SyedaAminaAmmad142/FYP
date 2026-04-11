import Navbar from "../components/Navbar";
import VideoFeed from "../components/VideoFeed";
import { useState } from "react";

export default function InstructorDashboard() {
  // Example placeholder student list
  const [students] = useState([
    { id: 1, name: "Student A" },
    { id: 2, name: "Student B" },
    { id: 3, name: "Student C" },
    { id: 4, name: "Student D" },
    { id: 5, name: "Student E" },
  ]);

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">
      <Navbar />

      <div className="p-6 flex-1 overflow-y-auto">

        <h2 className="text-2xl font-bold mb-4">Live Student Feeds</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white shadow-lg rounded-lg p-4"
            >
              {/* Video Box */}
              <div className="w-full h-48 bg-black rounded flex items-center justify-center">
                <VideoFeed />
              </div>

              {/* Name Label */}
              <p className="mt-2 text-center font-semibold">{student.name}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

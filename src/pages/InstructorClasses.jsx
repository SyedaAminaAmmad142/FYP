import { useState } from "react";

export default function InstructorClasses() {
  const [classes, setClasses] = useState([
    { id: 1, name: "AI-101", code: "A1B2C3" },
    { id: 2, name: "Deep Learning", code: "DL2025" },
  ]);

  const [newClassName, setNewClassName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const generateCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const addClass = () => {
    if (!newClassName.trim()) return;

    const newClass = {
      id: classes.length + 1,
      name: newClassName,
      code: generateCode(),
    };

    setClasses([...classes, newClass]);
    setNewClassName("");
    setShowModal(false);
  };

  return (
    <div className="h-screen p-10 bg-gray-100">

      <h1 className="text-3xl font-bold mb-6">Your Classes</h1>

      {/* CLASS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {classes.map((cls) => (
          <div key={cls.id} className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{cls.name}</h3>

            <p className="text-gray-600">
              Class Code: <span className="font-mono">{cls.code}</span>
            </p>

            <div className="mt-4 flex justify-between">
              <a
                href="/instructor/dashboard"
                className="text-blue-600 underline"
              >
                Start Lecture
              </a>

              <button
                onClick={() => navigator.clipboard.writeText(cls.code)}
                className="text-sm bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
              >
                Copy Code
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* BUTTON: Open Modal */}
      <button
        className="mt-10 px-6 py-3 bg-green-600 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        + Create New Class
      </button>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 w-80 rounded shadow-lg">

            <h2 className="text-xl font-bold mb-4">Create New Class</h2>

            <input
              type="text"
              placeholder="Class Name"
              className="w-full p-3 border rounded mb-4"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />

            <button
              onClick={addClass}
              className="w-full bg-blue-600 text-white p-3 rounded mb-2"
            >
              Create
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-300 p-3 rounded"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

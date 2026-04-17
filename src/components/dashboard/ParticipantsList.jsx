export default function ParticipantsList() {
  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-semibold p-4 border-b">Participants</h2>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        <div className="p-2 bg-gray-200 rounded">You</div>
        <div className="p-2 bg-gray-200 rounded">Student A</div>
        <div className="p-2 bg-gray-200 rounded">Student B</div>
      </div>
    </div>
  );
}

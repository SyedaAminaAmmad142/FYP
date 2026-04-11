export default function ChatbotPanel() {
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-lg font-semibold p-4 border-b">Chatbot</h2>
      <div className="flex-1 p-4 text-gray-700">
        Chatbot messages will appear here.
      </div>
      <div className="p-3 border-t">
        <input
          type="text"
          placeholder="Ask something..."
          className="w-full border px-3 py-2 rounded"
        />
      </div>
    </div>
  );
}

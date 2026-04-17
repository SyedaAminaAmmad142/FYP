import useMicrophone from "../hooks/useMicrophone";

export default function AudioRecorder() {
  const { isRecording, startRecording, stopRecording } = useMicrophone();

  return (
    <div className="p-4">

      <h2 className="text-lg font-semibold mb-4">Microphone</h2>

      {isRecording ? (
        <button
          className="bg-red-500 text-white px-6 py-2 rounded"
          onClick={stopRecording}
        >
          Stop Recording
        </button>
      ) : (
        <button
          className="bg-green-600 text-white px-6 py-2 rounded"
          onClick={startRecording}
        >
          Start Recording
        </button>
      )}
    </div>
  );
}

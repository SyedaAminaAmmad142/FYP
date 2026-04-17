import { useRef, useCallback } from "react";
import Webcam from "react-webcam";

export default function VideoFeed() {
  const webcamRef = useRef(null);

  const captureFrame = useCallback(() => {
    if (!webcamRef.current) return null;
    return webcamRef.current.getScreenshot();
  }, []);

  return (
    <div className="w-full h-full bg-black rounded-lg overflow-hidden relative">

      {/* Live Webcam */}
      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}
        screenshotFormat="image/jpeg"
        className="w-full h-full object-cover"
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: "user",
        }}
      />

      <button
        onClick={() => console.log(captureFrame())}
        className="absolute bottom-4 right-4 bg-white text-black px-4 py-2 rounded shadow-lg"
      >
        Capture Frame
      </button>

    </div>
  );
}


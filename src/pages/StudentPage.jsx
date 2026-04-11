import Navbar from "../components/Navbar";
import ParticipantsList from "../components/ParticipantsList";
import ChatbotPanel from "../components/ChatbotPanel";
import AudioRecorder from "../components/AudioRecorder";
import VideoFeed from "../components/VideoFeed";
import BottomToolbar from "../components/BottomToolbar";

export default function StudentPage() {
  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100">

      <Navbar />

      <div className="flex flex-1 overflow-hidden">

        <div className="w-64 bg-white shadow-lg border-r hidden md:flex">
          <ParticipantsList />
        </div>

        <div className="flex-1 bg-black flex items-center justify-center relative">
          <div className="w-3/4 h-3/4">
            <VideoFeed />
          </div>

          <BottomToolbar />
        </div>

        <div className="w-80 bg-white shadow-lg border-l hidden md:flex flex-col">
  <ChatbotPanel />
  <AudioRecorder />
</div>


      </div>
    </div>
  );
}

export default function BottomToolbar() {
  return (
    <div className="absolute bottom-6 flex items-center gap-6 bg-white/20 backdrop-blur-md p-4 rounded-full">
      <button className="bg-red-500 text-white px-6 py-2 rounded-full">
        End Call
      </button>
      <button className="bg-white text-black px-4 py-2 rounded-full">Mic</button>
      <button className="bg-white text-black px-4 py-2 rounded-full">Camera</button>
      <button className="bg-white text-black px-4 py-2 rounded-full">Share</button>
    </div>
  );
}

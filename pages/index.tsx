export default function Home() {
  return (
    <main className="flex bg-gray-700 min-h-screen text-white">
      <div className="bg-gray-800 p-4">
        <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-gray-800">
          JC
        </div>
      </div>
      <div className="bg-gray-700 w-60 flex flex-col">
        <div className="p-4 shadow-md">Tailwind CSS</div>
        <div className="p-4 flex-1">Channels</div>
      </div>
      <div className="bg-gray-600 flex-1 flex flex-col">
        <div className="p-4 shadow-md">#general</div>
        <div className="p-4 flex-1">Messages</div>
      </div>
    </main>
  );
}

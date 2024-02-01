export default function Home() {
  return (
    <div className="flex text-gray-100 h-screen">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
        {[...Array(40)].map((_, index) => (
          <div
            key={index}
            className="h-12 w-12 bg-white rounded-full flex items-center justify-center text-gray-800"
          >
            {index}
          </div>
        ))}
      </div>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="font-title text-white px-3 h-12 flex items-center shadow-md">
          Tailwind CSS
        </div>
        <div className="text-gray-300 font-medium p-3 flex-1 overflow-y-scroll space-y-2 ">
          <p className="text-white">Channel (unread)</p>
          {[...Array(40)].map((_, index) => (
            <p key={index}>Channel {index}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">#general</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-4">
          {[...Array(40)].map((_, index) => (
            <p key={index}>
              Somewhere, somewhere, somewhere to go. Many years ago. {index}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

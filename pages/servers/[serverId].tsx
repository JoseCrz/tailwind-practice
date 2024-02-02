import { useRouter } from "next/router";

export default function Server1() {
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <div className="font-title text-white px-3 h-12 flex items-center shadow-sm">
          Gain
        </div>
        <div className="text-gray-300 font-medium p-3 flex-1 overflow-y-scroll space-y-2 ">
          <p className="text-white">Channel (unread)</p>
          {[...Array(40)].map((_, index) => (
            <p key={index}>Channel {index}</p>
          ))}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-sm">#general</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-4">
          {[...Array(40)].map((_, index) => (
            <p key={index}>
              Somewhere, somewhere, somewhere to go. Many years ago. {index}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

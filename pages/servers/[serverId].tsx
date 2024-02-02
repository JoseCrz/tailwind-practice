import { useRouter } from "next/router";
import { VerifiedIcon, CheckIcon, ChevronIcon } from "@/components/icons";
export default function Server1() {
  const router = useRouter();

  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <button className="font-title text-white text-[15px] px-4 h-12 flex items-center shadow-sm transition hover:bg-gray-550/[.16]">
          <div className="relative h-4 w-4 mr-1">
            <VerifiedIcon className="absolute h-4 w-4 text-gray-550" />
            <CheckIcon className="absolute h-4 w-4" />
          </div>
          Gain
          <ChevronIcon className="h-[18px] w-[18px] ml-auto opacity-80" />
        </button>
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

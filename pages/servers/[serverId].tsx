import Link from "next/link";

import {
  BookIcon,
  VerifiedIcon,
  CheckIcon,
  ChevronIcon,
  AddPersonIcon,
  SpeakerphoneIcon,
} from "@/components/icons";
export default function Server1() {
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
        <div className="text-gray-300 font-medium flex-1 overflow-y-scroll mt-[17px]">
          <div className="mt-[21px] space-y-0.5">
            <Link
              href="#"
              className="flex items-center px-2 py-1 mx-2 group  text-gray-300 hover:text-gray-100 hover:bg-gray-550/[.16] rounded"
            >
              <BookIcon className="w-5 h-5 mr-1.5 text-gray-400" />
              welcome
              <AddPersonIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-gray-200 hover:text-gray-100" />
            </Link>
            <Link
              href="#"
              className="flex items-center px-2 py-1 mx-2 group text-gray-300 hover:text-gray-100 hover:bg-gray-550/[.16] rounded"
            >
              <SpeakerphoneIcon className="w-5 h-5 mr-1.5 text-gray-400" />
              announcements
              <AddPersonIcon className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-gray-200 hover:text-gray-100" />
            </Link>
          </div>
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

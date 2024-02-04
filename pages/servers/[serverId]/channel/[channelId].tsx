import Link from "next/link";
import { useRouter } from "next/router";
import * as Icons from "@/components/icons";
import data from "@/mocks/data.json";

export default function Server1() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex flex-col">
        <button className="font-title text-white text-[15px] px-4 h-12 flex items-center shadow-sm transition hover:bg-gray-550/[.16]">
          <div className="relative h-4 w-4 mr-1">
            <Icons.Verified className="absolute h-4 w-4 text-gray-550" />
            <Icons.Check className="absolute h-4 w-4" />
          </div>
          Gain
          <Icons.Chevron className="h-[18px] w-[18px] ml-auto opacity-80" />
        </button>
        <div className="flex-1 overflow-y-scroll font-medium text-gray-300 pt-3 space-y-[21px]">
          {data[1].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button className="flex items-center px-0.5 text-xs uppercase font-title tracking-wide">
                  <Icons.Arrow className="w-3 h-3 mr-0.5" />
                  {category.label}
                </button>
              )}
              <div key={category.id} className="mt-[5px] space-y-0.5">
                {category.channels.map((channel) => (
                  <ChannelLink key={channel.id} channel={channel} />
                ))}
              </div>
            </div>
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

type Channel = (typeof data)["1"]["categories"][number]["channels"][number];

function ChannelLink({ channel }: { channel: Channel }) {
  const router = useRouter();
  const Icon = (() => {
    if ("icon" in channel) {
      //@ts-ignore
      return Icons[channel.icon];
    }

    return Icons.Hashtag;
  })();

  const isActive = channel.id === Number(router.query.channelId);
  return (
    <Link
      href={`/servers/1/channel/${channel.id}`}
      className={`flex items-center px-2 py-1 mx-2 rounded group ${
        isActive
          ? "text-white bg-gray-550/[0.32] "
          : "text-gray-300 hover:bg-gray-550/[.16] hover:text-gray-100"
      }`}
    >
      <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-gray-200 hover:text-gray-100" />
    </Link>
  );
}
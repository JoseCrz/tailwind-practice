import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Icons from "@/components/icons";
import { data } from "@/mocks/data";

export default function Server1() {
  let router = useRouter();

  const serverId = Number(router.query.serverId) as keyof typeof data;

  let server = data[serverId];
  let channel = server.categories
    .map((c) => c.channels)
    .flat()
    .find((channel) => +channel.id === +router.query.channelId!);

  const [closedCategories, setClosedCategories] = useState<number[]>([]);

  function toggleCategory(categoryId: number) {
    setClosedCategories((prevClosedCategories) =>
      prevClosedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...prevClosedCategories, categoryId]
    );
  }

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
          {data[1].categories.map((category) => {
            const isClosed = closedCategories.includes(category.id);
            return (
              <div key={category.id}>
                {category.label && (
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="flex items-center px-0.5 text-xs uppercase font-title tracking-wide hover:text-gray-100 w-full"
                  >
                    <Icons.Arrow
                      className={`w-3 h-3 mr-0.5 transition duration-200 ${
                        isClosed ? "-rotate-90" : ""
                      }`}
                    />
                    {category.label}
                  </button>
                )}
                <div key={category.id} className="mt-[5px] space-y-0.5">
                  {category.channels
                    .filter((channel: Channel) => {
                      const categoryisOpen = !closedCategories.includes(
                        category.id
                      );

                      return categoryisOpen || channel.unread;
                    })
                    .map((channel) => (
                      <ChannelLink key={channel.id} channel={channel} />
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-gray-700 flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-sm">
          {channel?.label}
        </div>
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

type Channel = {
  id: number;
  label: string;
  icon?: string;
  unread?: boolean;
};

type ChannelLinkState = "active" | "inactiveUnread" | "inactiveRead";

const classes: Record<ChannelLinkState, string> = {
  active: "text-white bg-gray-550/[0.32]",
  inactiveUnread:
    "text-white hover:bg-gray-550/[.16] active:bg-gray-550/[0.24]",
  inactiveRead:
    "text-gray-300 hover:bg-gray-550/[.16] hover:text-gray-100 active:bg-gray-550/[0.24]",
};

function ChannelLink({ channel }: { channel: Channel }) {
  const router = useRouter();
  const Icon = (() => {
    if (channel.icon) {
      // @ts-ignore
      return Icons[channel.icon];
    }

    return Icons.Hashtag;
  })();

  const isActive = channel.id === Number(router.query.channelId);

  const state: ChannelLinkState = isActive
    ? "active"
    : channel.unread
    ? "inactiveUnread"
    : "inactiveRead";

  return (
    <Link
      href={`/servers/1/channel/${channel.id}`}
      className={`flex items-center px-2 py-1 mx-2 rounded group relative ${classes[state]}`}
    >
      {state === "inactiveUnread" && (
        <div className="absolute left-0 -mx-2 w-1 h-2 rounded-r-full bg-white" />
      )}
      <Icon className="w-5 h-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddPerson className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-gray-200 hover:text-gray-100" />
    </Link>
  );
}

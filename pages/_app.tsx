import type { SVGProps } from "react";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import localFont from "next/font/local";

const whitney = localFont({
  src: [
    {
      path: "../public/fonts/whitney/whitney-light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/whitney/whitney-book.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/whitney/whitney-medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/whitney/whitney-semibold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-whitney",
});

const ginto = localFont({
  src: "../public/fonts/ginto/ginto-semibold.woff",
  weight: "600",
  variable: "--font-ginto",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${whitney.variable} font-sans ${ginto.variable}`}>
      <div className="flex text-gray-100 h-screen">
        <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
          <Link
            href="/"
            className="h-12 w-12 rounded-[50%] hover:rounded-2xl flex items-center justify-center text-gray-100 hover:text-white hover:bg-brand bg-gray-700 transition-all duration-200"
          >
            <DiscordIcon className="h-5 w-7" />
          </Link>
          <Link
            href="/servers/1"
            className="h-12 w-12 rounded-[50%] hover:rounded-2xl flex items-center justify-center text-gray-100 hover:text-white hover:bg-brand bg-gray-700 transition-all duration-200"
          >
            S1
          </Link>
        </div>
        <Component {...pageProps} />
      </div>
    </main>
  );
}

function DiscordIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="false" viewBox="0 0 28 20" {...props}>
      <path
        fill="currentColor"
        d="M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
      />
    </svg>
  );
}

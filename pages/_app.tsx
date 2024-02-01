import "@/styles/globals.css";
import type { AppProps } from "next/app";
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
      <Component {...pageProps} />
    </main>
  );
}

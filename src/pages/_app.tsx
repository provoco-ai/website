import type { AppProps } from "next/app";
import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";

import "~/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={clsx(
        inter.variable,
        lexend.variable,
        "font-sans selection:bg-sky-500 selection:text-white",
      )}
    >
      <Component {...pageProps} />
    </div>
  );
}

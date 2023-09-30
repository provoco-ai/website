import type { AppProps } from "next/app";
import { Inter, Lexend } from "next/font/google";
import clsx from "clsx";

import "~/styles/tailwind.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={clsx(inter.className, lexend.className)}>
      <Component {...pageProps} />
    </div>
  );
}

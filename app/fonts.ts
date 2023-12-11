import {
  Inter,
  Roboto_Mono,
  Arimo,
  Cormorant_Garamond,
} from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const schnyder = localFont({
  src: "../fonts/SchnyderMLight.woff2",
  display: "swap",
});

export const canela = localFont({
  src: "../fonts/Canela-Medium-Trial.woff2",
  display: "swap",
});

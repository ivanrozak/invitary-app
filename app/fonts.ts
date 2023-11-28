import {
  Inter,
  Roboto_Mono,
  Arimo,
  Cormorant_Garamond,
} from "next/font/google";

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

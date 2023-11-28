import type { Metadata } from "next";
import "../styles/globals.scss";
import Provider from "./providers";

export const metadata: Metadata = {
  title: "Invitary | Next step of website invitations",
  description: "Next step of website invitations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

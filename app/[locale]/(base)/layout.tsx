import BaseFooter from "@/components/Home/BaseFooter";
import BaseNavbar from "@/components/Home/BaseNavbar";
import ThemeProvider from "@/components/Home/ThemeProvider";

export default function BaseLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <BaseNavbar />
      {children}
      <BaseFooter />
    </ThemeProvider>
  );
}

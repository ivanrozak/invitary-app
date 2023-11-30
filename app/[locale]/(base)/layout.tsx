import BaseFooter from "@/components/Home/BaseFooter";
import BaseNavbar from "@/components/Home/BaseNavbar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BaseNavbar />
      {children}
      <BaseFooter />
    </>
  );
}

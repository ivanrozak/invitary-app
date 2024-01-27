import { Avatar, Button, cn } from "@nextui-org/react";
import React from "react";
import { HomeIcon, PaintIcon, SignOutIcon } from "../icons";
import { usePathname, useRouter } from "next/navigation";

const DashboardSidebar = () => {
  return (
    <aside className="fixed w-24 h-screen bg-slate-600 flex flex-col justify-between items-center p-6 text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <Avatar
          showFallback
          name="JD"
          size="lg"
          src="https://images.unsplash.com/broken"
        />
        <div className="text-center text-xs">John & Dean</div>
        <NavButton title="Home" icon={<HomeIcon />} to="/user/home" />
        <NavButton title="Theme" icon={<PaintIcon />} to="/user/theme" />
      </div>
      <div>
        <NavButton title="Logout" icon={<SignOutIcon />} to="#" />
      </div>
    </aside>
  );
};

const NavButton = ({
  title,
  icon,
  to,
}: {
  title: string;
  icon: any;
  to: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const toNavigation = () => {
    router.push(to);
  };
  return (
    <Button
      variant="light"
      className={cn(
        "flex flex-col justify-center items-center gap-0 h-14 text-white",
        { "bg-white/10": pathname.includes(to) }
      )}
      onClick={toNavigation}
    >
      {icon}
      <div className="text-xs">{title}</div>
    </Button>
  );
};

export default DashboardSidebar;

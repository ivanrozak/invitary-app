"use client";

import DashNavbar from "@/components/Dashboard/DashNavbar";
import DashboardSidebar from "@/components/Dashboard/Sidebar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-slate-100 h-screen">
      <DashboardSidebar />
      <div className="ps-24">
        <DashNavbar />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;

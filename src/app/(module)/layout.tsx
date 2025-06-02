"use client";

import dynamic from "next/dynamic";
import { FC, ReactNode } from "react";

const Topbar = dynamic(() => import("@/components/organism/topbar"), {
  ssr: false,
});

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen w-screen overflow-x-hidden relative">
      <Topbar />
      {children}
    </div>
  );
};

export default Layout;

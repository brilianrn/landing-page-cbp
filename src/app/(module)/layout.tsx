import { Topbar } from "@/components/organism";
import { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  // useFirebaseMessaging();

  return (
    <div className="h-screen w-screen overflow-x-hidden relative">
      <Topbar />
      {children}
    </div>
  );
};

export default Layout;

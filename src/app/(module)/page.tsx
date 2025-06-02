"use client";

import dynamic from "next/dynamic";

const HomeView = dynamic(
  () => import("@/packages/home/presentation/view").then((mod) => mod.HomeView),
  {
    ssr: false,
  }
);

export default HomeView;

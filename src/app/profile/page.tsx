"use client";

import dynamic from "next/dynamic";

const ProfileView = dynamic(
  () =>
    import("@/packages/profile/presentation/view").then(
      (mod) => mod.ProfileView
    ),
  {
    ssr: false,
  }
);

export default ProfileView;

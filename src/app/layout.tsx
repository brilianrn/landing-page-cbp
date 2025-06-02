import { StateProvider } from "@/shared/context";
import "@/shared/styles/fonts.css";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";
import "react-slideshow-image/dist/styles.css";

export const metadata: Metadata = {
  title: "Cahaya Bangun Perkasa | General Tranding and Contractor",
  description: "Bahan bangunan murah dan berkualitas",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="id">
      <body>
        <StateProvider>{children}</StateProvider>
      </body>
    </html>
  );
};

export default RootLayout;

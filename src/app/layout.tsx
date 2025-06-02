import { StateProvider } from "@/shared/context";
import "@/shared/styles/fonts.css";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";
import "react-slideshow-image/dist/styles.css";

export const metadata: Metadata = {
  title: "Cahaya Bangun Perkasa | General Tranding and Contractor",
  description:
    "Cahaya Bangun Perkasa adalah perusahaan yang bergerak di bidang general trading dan kontraktor. Kami berkomitmen untuk memberikan pelayanan yang terbaik dan produk yang berkualitas untuk memenuhi kebutuhan pelanggan. Kami memiliki berbagai macam produk bahan bangunan yang lengkap dan harga yang terjangkau.",
  metadataBase: new URL("https://cahayabangunperkasa.vercel.app"),
  openGraph: {
    title: "Cahaya Bangun Perkasa | General Tranding and Contractor",
    description:
      "Cahaya Bangun Perkasa adalah perusahaan yang bergerak di bidang general trading dan kontraktor. Kami berkomitmen untuk memberikan pelayanan yang terbaik dan produk yang berkualitas untuk memenuhi kebutuhan pelanggan. Kami memiliki berbagai macam produk bahan bangunan yang lengkap dan harga yang terjangkau.",
    url: "https://cahayabangunperkasa.vercel.app",
    siteName: "Cahaya Bangun Perkasa | General Tranding and Contractor",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cahaya Bangun Perkasa | General Tranding and Contractor",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cahaya Bangun Perkasa | General Tranding and Contractor",
    description:
      "Cahaya Bangun Perkasa adalah perusahaan yang bergerak di bidang general trading dan kontraktor. Kami berkomitmen untuk memberikan pelayanan yang terbaik dan produk yang berkualitas untuk memenuhi kebutuhan pelanggan. Kami memiliki berbagai macam produk bahan bangunan yang lengkap dan harga yang terjangkau.",
    images: ["/og-image.png"],
  },
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

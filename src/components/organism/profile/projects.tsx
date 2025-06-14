"use client";

import { Image } from "@/components/atoms";

type Project = {
  title: string;
  location: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "Storage",
    location: "Klaten, Jawa Tengah",
    image: "/images/projects/storage-klaten.jpg",
    description:
      "Pembangunan gudang penyimpanan skala besar berbahan struktur baja untuk mendukung logistik dan distribusi.",
  },
  {
    title: "Perumahan",
    location: "Kupang, NTT",
    image: "/images/projects/perumahan-kupang.jpg",
    description:
      "Pembangunan unit perumahan dengan fokus pada kenyamanan dan daya tahan di daerah Kupang.",
  },
  {
    title: "RSUD Tanjung",
    location: "Lombok, NTB",
    image: "/images/projects/rsud-tanjung.jpg",
    description:
      "Kontribusi pembangunan fasilitas rumah sakit umum daerah sebagai bagian dari infrastruktur publik.",
  },
  {
    title: "Garasi Honda",
    location: "Negare, Bali",
    image: "/images/projects/garasi-honda.jpg",
    description:
      "Garasi dan bengkel servis kendaraan Honda dengan standar tinggi untuk layanan purna jual.",
  },
  {
    title: "Café",
    location: "Nusa Dua, Bali",
    image: "/images/projects/cafe-nusa-dua.jpg",
    description:
      "Pembangunan café dengan desain estetik dan nyaman di kawasan wisata Nusa Dua, Bali.",
  },
  {
    title: "Gereja GBI",
    location: "Solo, Jawa Tengah",
    image: "/images/projects/gereja-gbi.jpg",
    description:
      "Pembangunan gedung gereja yang luas dan kokoh untuk tempat ibadah yang representatif.",
  },
];

export const ProfileProjects = () => {
  return (
    <section className="py-12 mb-16 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <p className="text-center text-gray-600 mb-12">
          Daftar proyek-proyek besar yang telah diselesaikan oleh PT. Cahaya
          Bangun Perkasa di berbagai wilayah Indonesia.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={224}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{project.location}</p>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

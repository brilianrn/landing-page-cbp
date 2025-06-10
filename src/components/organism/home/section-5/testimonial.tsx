"use client";

import { Image } from "@/components/atoms";
import classNames from "clsx";
import { motion } from "framer-motion";
import Slider from "react-slick";

interface TestimonialCardProps {
  logoSrc: string;
  logoAlt: string;
  message: string;
  name: string;
  role: string;
}

const testimonials: TestimonialCardProps[] = [
  {
    logoSrc: "/logo/ptcbp.png",
    logoAlt: "PT Cahaya Bangun Perkasa",
    message:
      "PT Cahaya Bangun Perkasa selalu memberikan pelayanan terbaik dengan material berkualitas. Kami sangat puas dengan ketepatan waktu pengiriman materialnya.",
    name: "Andi Pratama",
    role: "Site Manager | CV Karya Mandiri",
  },
  {
    logoSrc: "/logo/ptcbp.png",
    logoAlt: "PT Cahaya Bangun Perkasa",
    message:
      "Sebagai mitra proyek, PT Cahaya Bangun Perkasa selalu mendukung kebutuhan kami dengan pelayanan profesional dan harga kompetitif.",
    name: "Siti Aisyah",
    role: "Procurement Officer | PT Wijaya Karya",
  },
  {
    logoSrc: "/logo/ptcbp.png",
    logoAlt: "PT Cahaya Bangun Perkasa",
    message:
      "Produk dari PT Cahaya Bangun Perkasa memiliki kualitas yang sangat baik, sangat cocok untuk proyek-proyek besar yang memerlukan ketahanan tinggi.",
    name: "Budi Santoso",
    role: "Project Engineer | PT Adhi Karya",
  },
  {
    logoSrc: "/logo/ptcbp.png",
    logoAlt: "PT Cahaya Bangun Perkasa",
    message:
      "Kami selalu mengandalkan PT Cahaya Bangun Perkasa untuk suplai material bangunan. Respon cepat dan layanan after sales yang sangat membantu.",
    name: "Rizky Maulana",
    role: "Owner | CV Jaya Abadi",
  },
  {
    logoSrc: "/logo/ptcbp.png",
    logoAlt: "PT Cahaya Bangun Perkasa",
    message:
      "Rekanan terpercaya dalam penyediaan alat berat dan material konstruksi. Terima kasih atas dukungan untuk proyek kami.",
    name: "Wahyu Ramadhan",
    role: "Logistics Coordinator | PT PP (Persero) Tbk",
  },
  {
    logoSrc: "/logo/ptcbp.png",
    logoAlt: "PT Cahaya Bangun Perkasa",
    message:
      "Kami merasa sangat terbantu dengan solusi material konstruksi yang ditawarkan oleh PT Cahaya Bangun Perkasa. Sangat profesional!",
    name: "Eka Putri",
    role: "Architect | Studio Karya Nusantara",
  },
  {
    logoSrc: "/logo/ptcbp.png",
    logoAlt: "PT Cahaya Bangun Perkasa",
    message:
      "Pelayanan PT Cahaya Bangun Perkasa selalu memuaskan, sangat cocok untuk mendukung perkembangan infrastruktur Indonesia.",
    name: "Hendra Wijaya",
    role: "Construction Manager | PT Hutama Karya",
  },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  className: "center",
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const TestimonialCarousel = () => {
  return (
    <Slider {...settings} dots={false}>
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className={classNames(
            "p-2 transition-all duration-500 w-full z-10"
            // isActive
            //   ? "bg-white shadow-md scale-100 opacity-100 z-10"
            //   : isVisible
            //   ? "bg-white/60 blur-[1px] scale-95 opacity-40 z-0"
            //   : "hidden"
          )}
          layout
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-xl flex items-start gap-4 bg-white shadow-md scale-100 opacity-100 min-h-44 h-full p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex-shrink-0"
            >
              <Image
                src={t.logoSrc}
                alt={t.logoAlt}
                width={60}
                height={60}
                className="rounded-full object-contain"
              />
            </motion.div>
            <div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-sm text-gray-700 mb-4"
              >
                {t.message}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="font-semibold text-black"
              >
                {t.name}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-sm text-gray-500"
              >
                {t.role}
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </Slider>
  );
};

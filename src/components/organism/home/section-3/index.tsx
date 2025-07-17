// ProductSection.tsx
"use client";

import { Image } from "@/components/atoms";
import { productRoute } from "@/shared/constants/routes";
import { motion, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { ProductSectionCategories } from "./categories";

const brands = [
  {
    name: "FUMIRA",
    description:
      "Fumira selalu menyediakan pilihan produk dan layanan terbaik bagi pelanggan.",
    logo: "/assets/images/product/fumira/logo.png",
  },
  {
    name: "RUFINGKU",
    description:
      "Rufingku di ciptakan dengan semangat untuk menciptakan solusi yang lebih baik.",
    logo: "/assets/images/product/rufingku/logo.png",
  },
  {
    name: "LYSAGHT",
    description:
      "Atap Lysaght adalah atap baja galvanis tahan lama, kuat, dan tahan cuaca ekstrem.",
    logo: "/assets/images/product/lysaght/logo.png",
  },
  {
    name: "INTEC",
    description:
      "Atap Intec adalah atap baja galvanis tahan lama, kuat, dan tahan cuaca ekstrem.",
    logo: "/assets/images/product/intec/logo.png",
  },
];

export const ProductSection = ({ y }: { y: MotionValue<string> }) => {
  const { push: navigate } = useRouter();

  return (
    <div className="flex flex-col w-full h-full items-center justify-center md:pt-0 md:pb-0 pb-2 pt-14">
      <motion.div
        style={{ y }}
        className="mb-6 text-center tracking-075 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-2xl uppercase md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Brand <span className="text-orange-600">Kami</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Pilihan brand terbaik yang bekerja sama dengan Cahaya Bangun Perkasa.
        </motion.p>
      </motion.div>

      <ProductSectionCategories />

      <motion.div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6 px-2 md:px-10">
        {brands.map((brand, idx) => (
          <div key={idx} className="flex justify-center">
            <motion.a
              href={productRoute.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="max-w-52 w-full bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col justify-between"
            >
              <div className="pb-4 text-center">
                <div className="h-52 flex justify-center items-center mb-4 rounded-lg bg-orange-50">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={160}
                    height={160}
                    className="object-contain min-h-52 min-w-52 rounded-t-xl"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2">
                  {brand.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {brand.description}
                </p>
              </div>
            </motion.a>
          </div>
        ))}
      </motion.div>

      <motion.button
        whileHover={{ x: 4 }}
        className="flex items-center gap-2 text-sm text-orange-600 hover:underline transition cursor-pointer"
        onClick={() => navigate(productRoute.index)}
      >
        Lihat Semua Produk <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
};

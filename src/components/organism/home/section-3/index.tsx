"use client";

import { Image } from "@/components/atoms";
import { motion, MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ProductSectionCategories } from "./categories";

const products = [
  {
    name: "Scg Light Brick 7.5 Cm for interior, exterior...",
    price: "IDR 6.500",
    image: "/assets/products/bata.png",
  },
  {
    name: "Rooftop Wave Roof 4 Meter Semi Transpare...",
    price: "IDR 901.800",
    image: "/assets/products/atap.png",
  },
  {
    name: "SCG Portland Composite Cement 40 kg",
    price: "IDR 53.000",
    image: "/assets/products/semen.png",
  },
  {
    name: "Rooftop Roof Accessories 35×82 ...",
    price: "IDR 105.000",
    image: "/assets/products/atap2.png",
  },
];

export const ProductSection = ({ y }: { y: MotionValue<string> }) => {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <motion.div
        style={{ y }}
        className="mb-6 text-center tracking-075"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl uppercase md:text-4xl font-bold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          Produk <span className="text-orange-600">Kami</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Temukan kualitas bahan terbaik untuk setiap proyek konstruksi Anda.
        </motion.p>
      </motion.div>

      <ProductSectionCategories />

      {/* Bagian dengan Parallax Effect */}
      <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 px-6 md:px-10 cursor-pointer">
        {products.map((product, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            {/* Gambar dengan efek parallax yang bergerak saat scroll */}
            <motion.div
              className="w-full h-36 md:h-40 relative rounded-t-md overflow-hidden mb-3 bg-gray-100 dark:bg-gray-700"
              style={{
                transform: `translateY(${parseFloat(y.get()) * 0.1}px)`, // Membuat parallax bergerak terus-menerus
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div className="px-3 pb-3">
              <motion.h3
                className="text-xs md:text-sm font-medium text-gray-800 dark:text-gray-100 mb-1 line-clamp-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                {product.name}
              </motion.h3>
              <motion.p
                className="text-sm font-semibold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.2 }}
              >
                {product.price}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        whileHover={{ x: 4 }}
        className="flex items-center gap-2 text-sm text-orange-600 hover:underline transition cursor-pointer"
      >
        Lihat Semua Produk <ArrowRight className="w-4 h-4" />
      </motion.button>
    </div>
  );
};

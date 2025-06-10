"use client";

import { motion, MotionValue } from "framer-motion";
import { TestimonialCarousel } from "./testimonial";

export const BuyGuideSection = ({ y }: { y: MotionValue<string> }) => {
  return (
    <div className="relative w-full py-16 flex flex-col justify-center gap-8">
      <section className="relative w-full px-6 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:text-3xl text-2xl md:mt-0 mt-8 uppercase font-bold text-gray-900 dark:text-white mb-2 tracking-075"
        >
          Langkah <span className="text-orange-600">Pemesanan</span>
        </motion.h2>
        <div className="flex md:flex-row flex-col justify-between gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-80 w-full bg-cover bg-center bg-no-repeat bg-[url('/assets/images/home/order.jpeg')] rounded-xl shadow-lg"
          />
          <div className="flex flex-col gap-4 h-fit w-full">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 dark:text-gray-300 text-sm"
            >
              Berikut adalah langkah-langkah pemesanan produk di PT. Cahaya
              Bangun Perkasa, serta kontak yang bisa dihubungi.
            </motion.p>
            <ol className="list-decimal text-lg list-inside text-gray-700 dark:text-gray-300 space-y-3">
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Pilih produk yang akan anda pesan.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Hubungi kantor kami untuk penjelasan produk & negosiasi harga.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Setelah disepakati, kami buat kontrak penjualan dan info
                pembayaran DP.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                Setelah DP diterima, barang diproduksi/disiapkan, lalu customer
                dihubungi untuk pelunasan.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Setelah lunas, barang akan dikirim ke proyek/ekspedisi yang
                ditunjuk.
              </motion.li>
            </ol>
          </div>
        </div>
      </section>
      <TestimonialCarousel />
    </div>
  );
};

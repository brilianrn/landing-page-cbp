"use client";

import { motion, MotionValue } from "framer-motion";
import TestimonialCarousel from "./testimonial";

export const BuyGuideSection = ({ y }: { y: MotionValue<string> }) => {
  return (
    <section className="relative w-full py-16 px-6 lg:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl uppercase font-bold text-gray-900 dark:text-white mb-2 tracking-075"
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
            Berikut adalah langkah-langkah pemesanan produk di PT. Cahaya Bangun
            Perkasa, serta kontak yang bisa dihubungi.
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
      <TestimonialCarousel />
      {/* <div className="grid grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-4 h-fit">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 dark:text-gray-300 text-sm"
          >
            Berikut adalah langkah-langkah pemesanan produk di PT. Cahaya Bangun
            Perkasa, serta kontak yang bisa dihubungi.
          </motion.p>
          <ol className="list-decimal text-lg list-inside text-gray-700 dark:text-gray-300 space-y-3">
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pilih produk yang akan anda pesan.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hubungi kantor kami untuk penjelasan produk & negosiasi harga.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Setelah disepakati, kami buat kontrak penjualan dan info
              pembayaran DP.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Setelah DP diterima, barang diproduksi/disiapkan, lalu customer
              dihubungi untuk pelunasan.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Setelah lunas, barang akan dikirim ke proyek/ekspedisi yang
              ditunjuk.
            </motion.li>
          </ol>
        </div>

        <motion.div className="flex flex-col gap-3 my-auto">
          <div className="w-full h-fit rounded-xl overflow-hidden shadow-md">
            <Maps
              // eslint-disable-next-line
              // @ts-ignore
              popUpText={
                <Link
                  target="_blank"
                  href={constants.mapAddress}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group"
                >
                  Permata Candiloka Blok Y No. 03 Candi – Sidoarjo Jawa Timur
                </Link>
              }
              position={[-7.4952943, 112.7221395]}
              zoom={14}
            />
          </div>
        </motion.div>
      </div> */}
    </section>
  );
};

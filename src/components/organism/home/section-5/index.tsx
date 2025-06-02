"use client";

import { Maps } from "@/components/atoms";
import constants from "@/shared/constants";
import { motion, MotionValue } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";

export const BuyGuideSection = ({ y }: { y: MotionValue<string> }) => {
  return (
    <section className="relative w-full py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-6">
        <div className="flex flex-col gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl uppercase font-bold text-gray-900 dark:text-white mb-2 tracking-075"
          >
            Langkah <span className="text-orange-600">Pemesanan</span>
          </motion.h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col gap-4">
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
              zoom={17}
            />
          </div>
          {/*
            target="_blank"
            href={constants.mapAddress}
            className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group"
          >
            <Map className="text-orange-500 group-hover:text-blue-500 duration-200 transition-all" />
            <p className="group-hover:text-blue-500 transition-all duration-200 group-hover:underline">
              Permata Candiloka Blok Y No. 03 Candi – Sidoarjo Jawa Timur
            </p>
          </Link> */}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-2 mt-8"
          style={{ y }}
        >
          <ContactCard
            icon={<PhoneCall />}
            label="Telp Kantor"
            value="031-8075779"
          />
          <ContactCard
            icon={<PhoneCall />}
            label="Simpati Call"
            value="082-33333-0103"
          />
          <ContactCard
            icon={<PhoneCall />}
            label="Indosat"
            value="0858-33333-076"
          />
          <ContactCard
            icon={<PhoneCall />}
            label="XL/Axis"
            value="0838-33333-913"
          />
          <ContactCard
            icon={<MessageCircle />}
            label="Simpati WA"
            value="082-33333-0103"
          />
          <ContactCard
            icon={<MessageCircle />}
            label="Simpati WA"
            value="0813-3336-4518"
          />
        </motion.div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 shadow-sm gap-3 bg-white dark:bg-gray-800 cursor-pointer hover:bg-orange-100 duration-200 transition-all hover:scale-105">
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-orange-500"
    >
      {icon}
    </motion.span>
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-normal text-sm text-gray-800 dark:text-gray-200"
    >
      {label} : <br />
      <motion.span
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-medium text-medium dark:text-gray-300"
      >
        {value}
      </motion.span>
    </motion.span>
  </div>
);

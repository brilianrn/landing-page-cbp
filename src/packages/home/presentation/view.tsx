"use client";

import { Button } from "@/components/atoms";
import {
  ArticleSection,
  BuyGuideSection,
  ProductSection,
  WordingLeft,
  WordingRight,
} from "@/components/organism";
import { aboutUsRoute, sectionRoute } from "@/shared/constants/routes";
import { store } from "@/shared/context";
import { setActiveMenu } from "@/shared/context/actions";
import styles from "@/shared/styles/packages/home.module.css";
import classNames from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ICChevron } from "public/assets/icons";
import { useContext, useEffect, useRef } from "react";
import { Zoom } from "react-slideshow-image";

const ContactUs = dynamic(
  () => import("@/components/organism").then((mod) => mod.ContactUs),
  {
    ssr: false,
  }
);

export const HomeView = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const { dispatch } = useContext(store);

  const { push: navigate } = useRouter();

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  const sections = Object.values(sectionRoute) as Array<string>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) dispatch(setActiveMenu(`#${visible.target.id}`));
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.querySelector(id);
        if (el) observer.unobserve(el);
      });
    };
    // eslint-disable-next-line
  }, [dispatch, setActiveMenu]);

  return (
    <div
      ref={scrollContainerRef}
      className={classNames([styles["scroll-container"]])}
    >
      <section id="hero" className={classNames([styles.section])}>
        <Zoom
          scale={0.7}
          autoplay
          nextArrow={
            <ICChevron className="md:block hidden text-gray-300 opacity-25 hover:opacity-90 duration-200 transition-all md:!mr-2 mr-2 lg:size-24 size-12" />
          }
          prevArrow={
            <ICChevron className="md:block hidden text-gray-300 opacity-25 hover:opacity-90 duration-200 transition-all md:!ml-2 ml-2 lg:size-24 size-12 rotate-180" />
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[url('/assets/images/home/home.jpg')] bg-cover bg-right h-screen w-screen"
          >
            <WordingRight
              title="Bangun Rumah Impian dengan Material Berkualitas"
              description="Dari Material Berkualitas hingga Pelayanan Terbaik, Kami Siap Mendukung Setiap Proyek Anda."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[url('/assets/images/home/roof.jpg')] bg-cover bg-right h-screen w-screen"
          >
            <WordingRight
              title="Atap Berkualitas, Harga Kompetitif"
              description="Material atap pilihan untuk konstruksi yang tahan lama dan tampil menawan. Cocok untuk proyek rumah hingga bangunan komersial."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[url('/assets/images/home/pipes.jpeg')] bg-cover h-screen w-screen"
          >
            <WordingLeft
              title="Solusi Pipa Andal untuk Proyek Anda"
              description="Tersedia berbagai jenis pipa untuk kebutuhan rumah tangga hingga proyek industri. Anti bocor, kuat, dan mudah dipasang."
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[url('/assets/images/home/bricks.jpeg')] bg-cover bg-right h-screen w-screen"
          >
            <WordingLeft
              title="Bata Kokoh, Hasil Proyek Makin Oke!"
              description="Dari bata, semen, hingga material pendukung lainnya, kami sediakan semua yang Anda butuhkan untuk proyek rumah maupun industri."
            />
          </motion.div>
        </Zoom>
      </section>

      <section
        id="about"
        ref={sectionRef}
        className={classNames([
          styles.section,
          "relative overflow-hidden flex flex-col-reverse lg:flex-row lg:items-center items-start bg-[#f9fafb] dark:bg-gray-900 transition-colors duration-300",
        ])}
      >
        {/* Konten Teks */}
        <div className="relative w-full lg:w-1/2 px-6 lg:px-16 lg:py-12 md:py-12 py-4">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2"
          >
            Tentang Kami
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Solusi Bangunan Andal untuk Masa Depan yang Kokoh
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="dark:text-gray-300 leading-relaxed mb-8 max-w-xl"
          >
            PT Cahaya Bangun Perkasa adalah mitra terpercaya dalam penyediaan
            material bangunan berkualitas tinggi. Dari atap, bata, semen, hingga
            perpipaan — kami hadir untuk memenuhi setiap kebutuhan proyek Anda
            dengan cepat, aman, dan tepat waktu.
          </motion.p>

          {/* Statistik */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-3 gap-6 mb-8 max-w-md"
          >
            <div className="text-left tracking-075">
              <p className="text-2xl font-bold text-orange-500">500+</p>
              <p className="dark:text-gray-300 text-sm">Penjualan</p>
            </div>
            <div className="text-left tracking-075">
              <p className="text-2xl font-bold text-orange-500">2K+</p>
              <p className="dark:text-gray-300 text-sm">Pelanggan</p>
            </div>
            <div className="text-left tracking-075">
              <p className="text-2xl font-bold text-orange-500">50+</p>
              <p className="dark:text-gray-300 text-sm">Produk</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Button
              label="Pelajari Lebih Lanjut"
              type="orange"
              btnType="button"
              size="sm"
              onClick={() => navigate(aboutUsRoute)}
            />
          </motion.div>
        </div>

        {/* Gambar Parallax */}
        <motion.div
          style={{ y }}
          className="relative w-full lg:w-1/2 lg:h-[500px] md:h-full h-[250px] p-4"
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-[url('/assets/images/home/building.jpg')] bg-cover" />
        </motion.div>
      </section>

      <section
        id="product"
        ref={sectionRef}
        className="w-screen min-h-screen snap-start bg-[#f9fafb] dark:bg-gray-900 flex items-center justify-center"
      >
        <ProductSection y={y} />
      </section>

      <section
        id="articles"
        ref={sectionRef}
        className="w-screen min-h-screen snap-start bg-[#f9fafb] dark:bg-gray-900 flex items-center justify-center"
      >
        <ArticleSection y={y} />
      </section>

      <section
        id="how-to-buy"
        ref={sectionRef}
        className="w-screen min-h-screen snap-start bg-[#f9fafb] dark:bg-gray-900 flex items-center justify-center"
      >
        <BuyGuideSection />
      </section>

      <section
        id="contact-us"
        ref={sectionRef}
        className="w-screen min-h-screen snap-start bg-[#f9fafb] dark:bg-gray-900 flex items-center justify-center overflow-y-auto"
      >
        <ContactUs />
      </section>
    </div>
  );
};

"use client";

import {
  Button,
  InputText,
  InputTextarea,
  SelectOption,
} from "@/components/atoms";
import sx from "@/shared/styles/packages/home.module.css";
import classNames from "clsx";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  company?: string;
  message: string;
  sendTo: "wa1" | "wa2" | "wa3" | "wa4" | "email";
};

const DESTINATIONS: Record<FormValues["sendTo"], string> = {
  wa1: "https://wa.me/6281234567890",
  wa2: "https://wa.me/6282234567890",
  wa3: "https://wa.me/6283234567890",
  wa4: "https://wa.me/6284234567890",
  email: "mailto:contact@goapotik.com",
};

export const ContactUs = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const { name, company, message, sendTo } = data;

    const link =
      sendTo === "email"
        ? `mailto:contact@goapotik.com?subject=Pesan dari ${encodeURIComponent(
            name
          )}&body=${encodeURIComponent(
            `Nama: ${name}\nPerusahaan: ${company ?? "-"}\nPesan:\n${message}`
          )}`
        : `${DESTINATIONS[sendTo]}?text=${encodeURIComponent(
            `Halo, saya ${name}${
              company ? " dari " + company : ""
            }. Saya ingin menyampaikan:\n\n${message}`
          )}`;

    window.open(link, "_blank");
  };

  return (
    <motion.div className="h-full flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl uppercase font-bold text-gray-900 dark:text-white mb-2 tracking-075 text-center"
      >
        <span className="text-orange-600">Kontak</span> Kami
      </motion.h2>

      <div
        className={classNames([
          sx["contact-us-container"],
          "bg-white dark:bg-gray-800 relative pr-4",
        ])}
      >
        {/* Background Gradient & CS Illustration */}
        <div className="absolute h-96 w-1/2">
          <div className="h-full w-full bg-gradient-to-r from-primary-default opacity-30 to-transparent rounded-l-3xl" />
          <motion.div className="bg-[url('/assets/images/home/cs.png')] bg-cover bg-no-repeat bg-center absolute h-full w-full bottom-0 -left-[140px] opacity-100 z-0" />
        </div>

        {/* Spacer for left illustration */}
        <div className="w-96" />

        {/* Kontak Info */}
        <div className="flex flex-col gap-8 w-full py-4 pl-32">
          {/* Alamat */}
          <div className="flex items-start gap-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin
                className="text-primary-default dark:text-primary-lighter min-w-7 min-h-7"
                height={36}
                width={36}
              />
            </motion.div>
            <div className="flex flex-col mt-1">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-075 text-black dark:text-white"
              >
                Alamat
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-lg text-gray-500 dark:text-gray-300"
              >
                Perumahan Permata Candiloka Blok Y No. 03, Ngampelsari, Candi,
                Sidoarjo, Jawa Timur, 61271, Indonesia
              </motion.p>
            </div>
          </div>

          {/* Kontak */}
          <div className="flex items-start gap-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Phone
                className="text-primary-default dark:text-primary-lighter min-w-7 min-h-7"
                height={32}
                width={32}
              />
            </motion.div>
            <div className="flex flex-col mt-1">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold tracking-075 text-black dark:text-white"
              >
                Kontak
              </motion.h2>
              <div className="text-lg text-gray-500 dark:text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  WhatsApp: 082234567890
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Hotline: 031-8075779
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Email: ptcahayabangunperkasa@gmail.com
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulir Kontak */}
        <div className="flex flex-col gap-4 w-3/5 py-4">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InputText
                type="text"
                name="name"
                register={register}
                label="Nama Lengkap"
                size="lg"
                useLabelInside
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <InputText
                type="text"
                name="company"
                register={register}
                label="Perusahaan"
                size="lg"
                useLabelInside
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <InputTextarea
                name="message"
                register={register}
                label="Pesan"
                useLabelInside
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SelectOption
                name="sendTo"
                register={register}
                useInsideLabel
                required
                label="Pilih Tujuan"
                options={[
                  { value: "", label: "Kirim ke..." },
                  { value: "wa1", label: "WhatsApp 1" },
                  { value: "wa2", label: "WhatsApp 2" },
                  { value: "wa3", label: "WhatsApp 3" },
                  { value: "wa4", label: "WhatsApp 4" },
                  { value: "email", label: "Email" },
                ]}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <Button
                label="Kirim"
                type="primary"
                btnType="submit"
                className="w-full"
              />
            </motion.div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

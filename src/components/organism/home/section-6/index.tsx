"use client";

import {
  Button,
  InputText,
  InputTextarea,
  Maps,
  SelectOption,
} from "@/components/atoms";
import constants from "@/shared/constants";
import sx from "@/shared/styles/packages/home.module.css";
import classNames from "clsx";
import { motion } from "framer-motion";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";

type TSendTo = "wa1" | "wa2" | "email";

type FormValues = {
  name: string;
  company?: string;
  message?: string;
  sendTo: {
    value: TSendTo;
    label: string;
  };
};

export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    const { name, company, message, sendTo } = data;
    const date = new Date();
    const hours = date.getHours();
    const greeting =
      hours >= 6 && hours < 12
        ? "Selamat pagi"
        : hours >= 12 && hours < 15
        ? "Selamat siang"
        : hours >= 15 && hours < 18
        ? "Selamat sore"
        : "Selamat malam";

    const finalMessage = message?.trim()
      ? `${greeting}, saya ${name}${
          company ? " dari " + company : ""
        }. Saya ingin menyampaikan:\n\n${message}`
      : constants.defaultMessage;
    const isEmail = sendTo?.value?.includes("@");

    let link = "";
    if (isEmail) {
      const subject = `Pesan dari ${name}`;
      const body = `Nama: ${name}\nPerusahaan: ${company || "-"}\nPesan:\n${
        message || constants.defaultMessage
      }`;
      const mailto = `mailto:${sendTo?.value}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      link = mailto;
    } else {
      link = `${constants.waMe(sendTo?.value)}?text=${encodeURIComponent(
        finalMessage
      )}`;
    }

    window.open(link, "_blank");
  };

  return (
    <motion.div className="h-full flex flex-col lg:items-center items-start justify-center">
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
        <motion.div className="flex flex-col gap-3 my-auto">
          <div className="w-full h-fit rounded-xl overflow-hidden">
            <Maps
              className="!h-[25rem]"
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

        {/* Kontak Info */}
        <div className="flex flex-col gap-8 w-full py-4">
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
        <div className="flex flex-col gap-4 w-full py-4">
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
                errorMessage={errors?.name?.message}
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
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SelectOption
                name="sendTo"
                control={control}
                register={register}
                useInsideLabel
                required
                errorMessage={errors?.sendTo?.message}
                label="Pilih Tujuan"
                options={[
                  {
                    value: "6281804899000",
                    label: "0818-0489-9000 (WhatsApp 1)",
                  },
                  {
                    value: "6283833333913",
                    label: "0838-3333-3913 (WhatsApp 2)",
                  },
                  {
                    value: "ptcahayabangunperkasa@gmail.com",
                    label: "ptcahayabangunperkasa@gmail.com (Email)",
                  },
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

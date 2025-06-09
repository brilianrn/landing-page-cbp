"use client";

import { Switch } from "@/components/atoms";
import { Collapse } from "@/components/atoms/collapse";
import { sectionRoute } from "@/shared/constants/routes";
import { store } from "@/shared/context";
import sxTopbar from "@/shared/styles/components/topbar.module.css";
import {
  EStorageKey,
  retrieveLocalStorageItem,
  storeLocalStorageItem,
} from "@/shared/utils";
import classNames from "clsx";
import { motion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ICChevron, ICMoon, ICSun } from "public/assets/icons";
import { LogoAll } from "public/assets/images";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Menus } from "./menus";
import { ISectionHeader } from "./topbar";

const topbarVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const Topbar = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [openedMenu, setOpenedMenu] = useState<boolean>(false);

  const {
    state: { activeMenu },
  } = useContext(store);

  const storedTheme = retrieveLocalStorageItem(EStorageKey.THEME) || "light";

  const theme = useMemo(() => storedTheme, [storedTheme]);

  const menus: Array<ISectionHeader> = [
    {
      headerTitle: "Beranda",
      headerID: sectionRoute.home,
      headerRef: useRef<HTMLDivElement>(null),
    },
    {
      headerTitle: "Tentang Kami",
      headerID: sectionRoute.about,
      headerRef: useRef<HTMLDivElement>(null),
    },
    {
      headerTitle: "Produk",
      headerID: sectionRoute.product,
      headerRef: useRef<HTMLDivElement>(null),
    },
    {
      headerTitle: "Artikel",
      headerID: sectionRoute.articles,
      headerRef: useRef<HTMLDivElement>(null),
    },
    {
      headerTitle: "Cara Beli",
      headerID: sectionRoute.howToBuy,
      headerRef: useRef<HTMLDivElement>(null),
    },
  ];

  useEffect(() => {
    if (window) {
      const prefersDark =
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches) ||
        theme === "dark";

      setIsDark(theme === "dark");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, [theme]);

  const onChangeTheme = (value: boolean) => {
    setIsDark(value);
    storeLocalStorageItem({
      storageKey: EStorageKey.THEME,
      storageValue: value ? "dark" : "light",
    });
  };

  return (
    <motion.div
      variants={topbarVariants}
      initial="hidden"
      animate="visible"
      className={classNames(["md:top-0 top-4", sxTopbar.topbar])}
    >
      {openedMenu && (
        <div
          className="fixed bg-transparent w-screen h-screen z-[2]"
          onClick={() => setOpenedMenu(false)}
        />
      )}
      <div
        className={classNames([
          // openedMenu
          //   ? "md:rounded-b-4xl md:rounded-t-none rounded-4xl"
          //   : "md:rounded-b-full md:rounded-t-none rounded-full",
          // "md:rounded-b-full md:rounded-t-none rounded-full",
          openedMenu ? "pt-4 pb-0" : "py-4",
          "md:rounded-b-[88px] md:rounded-t-none rounded-[32px]",
          "bg-white dark:bg-dark-default relative flex flex-col shadow z-20 md:w-fit w-full lg:px-20 md:px-12 px-4 md:py-0",
        ])}
      >
        <div className={classNames([sxTopbar.container])}>
          <div className={classNames([sxTopbar.shape])}>
            <Link href={sectionRoute.home}>
              <Image
                src={LogoAll}
                alt="cahaya bangun perkasa"
                height={100}
                width={100}
                className={classNames(["md:h-10 h-8 w-full"])}
              />
            </Link>
            <div
              onClick={() => setOpenedMenu(!openedMenu)}
              className="lg:hidden flex justify-end items-center md:h-10 h-8 cursor-pointer dark:text-white text-dark-default"
            >
              <p className="font-medium text-sm uppercase">Menu</p>
              <ChevronDown
                className={classNames([
                  openedMenu && "rotate-180",
                  "transition-all duration-100 size-6 font-thin",
                ])}
              />
            </div>
            <div className="lg:block hidden my-auto">
              <Menus items={menus} activeSection={activeMenu} />
            </div>
            {/* Right side */}
            <div
              className={classNames([
                "lg:flex hidden justify-end md:gap-4 gap-2 items-center",
              ])}
            >
              <Switch
                enabled={isDark}
                setEnabled={onChangeTheme}
                className="dark:!bg-dark-500 border border-gray-400 !bg-gray-100 relative"
                iconClassName="!bg-primary-darker"
              >
                <div className={sxTopbar["icon-theme"]}>
                  {isDark ? (
                    <ICMoon className="size-3 text-primary-lighter" />
                  ) : (
                    <ICSun className="size-3 text-amber-300" />
                  )}
                </div>
              </Switch>
              <Link
                className={sxTopbar["contact-us"]}
                href={sectionRoute.contactUs}
              >
                <p>Kontak Kami</p>
                <ICChevron className="size-3" />
              </Link>
            </div>
          </div>
        </div>
        <Collapse
          opened={openedMenu}
          className={classNames([
            openedMenu ? "md:mt-2 mt-8" : "mt-0",
            "flex flex-col gap-8 text-left text-dark-default px-4",
          ])}
        >
          <Link
            onClick={() => setOpenedMenu(false)}
            href={sectionRoute.home}
            className={classNames(
              "hover:text-primary-default cursor-pointer dark:hover:text-primary-lighter dark:text-white transition-all duration-200 hover:font-medium hover:tracking-wider"
            )}
          >
            Beranda
          </Link>
          <Link
            onClick={() => setOpenedMenu(false)}
            href={sectionRoute.about}
            className={classNames(
              "hover:text-primary-default cursor-pointer dark:hover:text-primary-lighter dark:text-white transition-all duration-200 hover:font-medium hover:tracking-wider"
            )}
          >
            Tentang Kami
          </Link>
          <Link
            onClick={() => setOpenedMenu(false)}
            href={sectionRoute.product}
            className={classNames(
              "hover:text-primary-default cursor-pointer dark:hover:text-primary-lighter dark:text-white transition-all duration-200 hover:font-medium hover:tracking-wider"
            )}
          >
            Produk
          </Link>
          <Link
            onClick={() => setOpenedMenu(false)}
            href={sectionRoute.articles}
            className={classNames(
              "hover:text-primary-default cursor-pointer dark:hover:text-primary-lighter dark:text-white transition-all duration-200 hover:font-medium hover:tracking-wider"
            )}
          >
            Artikel
          </Link>
          <Link
            onClick={() => setOpenedMenu(false)}
            href={sectionRoute.howToBuy}
            className={classNames(
              "hover:text-primary-default cursor-pointer dark:hover:text-primary-lighter dark:text-white transition-all duration-200 hover:font-medium hover:tracking-wider"
            )}
          >
            Cara Beli
          </Link>
          <div className="flex justify-start items-center gap-4 w-full">
            <div className="block">
              <Switch
                enabled={isDark}
                setEnabled={onChangeTheme}
                className="dark:!bg-dark-500 border border-gray-400 !bg-gray-100 relative"
                iconClassName="!bg-primary-darker"
              >
                <div className={sxTopbar["icon-theme"]}>
                  {isDark ? (
                    <ICMoon className="size-3 text-primary-lighter" />
                  ) : (
                    <ICSun className="size-3 text-amber-300" />
                  )}
                </div>
              </Switch>
            </div>
            <Link
              onClick={() => setOpenedMenu(false)}
              href={sectionRoute.contactUs}
              className={classNames([
                sxTopbar["contact-us"],
                "hover:text-primary-default cursor-pointer w-full",
              ])}
            >
              <p>Kontak Kami</p>
              <ICChevron className="size-3" />
            </Link>
          </div>
        </Collapse>
      </div>
    </motion.div>
  );
};

export default Topbar;

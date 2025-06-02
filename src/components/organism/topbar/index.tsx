"use client";

import { Switch } from "@/components/atoms";
import { sectionRoute } from "@/shared/constants/routes";
import { store } from "@/shared/context";
import sxTopbar from "@/shared/styles/components/topbar.module.css";
import {
  EStorageKey,
  retrieveLocalStorageItem,
  storeLocalStorageItem,
} from "@/shared/utils";
import classNames from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ICBars, ICChevron, ICMoon, ICSun } from "public/assets/icons";
import { Logo, LogoAll } from "public/assets/images";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Menus } from "./menus";
import { ISectionHeader } from "./topbar";

export const Topbar = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

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
    setIsDark(theme === "dark");
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }, [theme]);

  const onChangeTheme = (value: boolean) => {
    setIsDark(value);
    storeLocalStorageItem({
      storageKey: EStorageKey.THEME,
      storageValue: value ? "dark" : "light",
    });
  };

  return (
    <div className={sxTopbar.topbar}>
      <div
        className={classNames([
          sxTopbar.container,
          "bg-white dark:bg-dark-default shadow z-20",
        ])}
      >
        <div className={classNames([sxTopbar.shape])}>
          <div className="lg:hidden flex justify-start md:gap-4 gap-1 items-center relative">
            <ICBars
              className={classNames([
                sxTopbar.bars,
                "dark:text-white text-dark-default",
              ])}
            />
            <Image
              src={Logo}
              alt="cahaya bangun perkasa"
              height={100}
              width={100}
              className="size-10 object-cover"
            />
            <Menus items={menus} activeSection={activeMenu} />
          </div>
          <Link
            href={sectionRoute.home}
            className={classNames(["lg:block hidden"])}
          >
            <Image
              src={LogoAll}
              alt="cahaya bangun perkasa"
              height={100}
              width={100}
              className="h-10 w-full"
            />
          </Link>
          <div className="lg:block hidden">
            <Menus items={menus} activeSection={activeMenu} />
          </div>
          <div className="flex justify-end md:gap-4 gap-2 items-center">
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
    </div>
  );
};

"use client";

import Typography from "@/components/ui/Typography";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { useMobileMenu } from "@/context/MobileMenuContext";
import BurgerMenuIcon from "@/components/ui/Icons/BurgerMenuIcon";
import CloseIcon from "@/components/ui/Icons/CloseIcon";
import {
  NAVBAR_CONTENT_FIRST_PART,
  NAVBAR_CONTENT_SECOND_PART,
} from "./Navbar.data";
import Image from "next/image";
import i18n from "@/i18n/i18n";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const pathName = usePathname();

  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } =
    useMobileMenu();

  // Why doesnt work ??
  console.log(i18n.language);

  return (
    <header className='sticky flex-row-reverse justify-end flex top-0 min-h-14 tablet:px-5 px-2 z-40 items-center border-b bg-colors-lightgreen border-gray-600 tablet:justify-center'>
      <Image
        quality={50}
        className={twMerge(
          "absolute right-10 cursor-pointer rounded-full",
          i18n.language === "fr" ? "border-2 border-colors-gray-50" : ""
        )}
        width={25}
        height={25}
        onClick={() => {
          i18n.changeLanguage("fr");
        }}
        src='/assets/images/home/fr.png'
        alt='fr'
      />
      <Image
        quality={50}
        className={twMerge(
          "absolute right-2 cursor-pointer rounded-full",
          i18n.language === "en" ? "border-2 border-colors-gray-50" : ""
        )}
        width={25}
        height={25}
        onClick={() => {
          i18n.changeLanguage("en");
        }}
        src='/assets/images/home/en.png'
        alt='en'
      />
      <nav className='hidden tablet:flex ml-5'>
        {NAVBAR_CONTENT_SECOND_PART.map((element) => {
          return (
            <Link
              href={element.link}
              key={element.label}
              className={twMerge(
                "mr-5 hover:text-colors-middlebrown transition duration-500 ease-in-out text-sm lg:text-base"
              )}
            >
              <Typography
                className={twMerge(
                  "text-black",
                  pathName === element.link ||
                    (pathName.includes("assistance") &&
                      element.label === "Assistance")
                    ? "text-red-600"
                    : ""
                )}
              >
                {element.label}
              </Typography>
            </Link>
          );
        })}
      </nav>
      <Link
        onClick={() => setMobileMenuOpen(false)}
        href='/'
        className=' flex items-center'
      >
        <Typography className='font-extrabold font-abril tablet:text-2xl text-lg'>
          Thiop Thiop Bike
        </Typography>
      </Link>
      <nav className='hidden tablet:flex ml-5'>
        {NAVBAR_CONTENT_FIRST_PART.map((element) => {
          return (
            <Link
              href={element.link}
              key={element.label}
              className={twMerge(
                "mr-5 hover:text-colors-middlebrown transition duration-500 ease-in-out text-sm lg:text-base"
              )}
            >
              <Typography
                className={twMerge(
                  "text-black",
                  pathName === element.link ||
                    (pathName.includes("assistance") &&
                      element.label === "Assistance")
                    ? "text-red-600"
                    : ""
                )}
              >
                {element.label}
              </Typography>
            </Link>
          );
        })}
      </nav>
      <nav className='flex flex-col tablet:hidden'>
        {isMobileMenuOpen ? (
          <CloseIcon
            className='text-colors-middlebrown h-6 w-16 cursor-pointer'
            onClick={toggleMobileMenu}
          />
        ) : (
          <BurgerMenuIcon
            onClick={toggleMobileMenu}
            className='h-11 duration-500 transition ease-in-out text-colors-gray-50 hover:text-colors-middlebrown cursor-pointer w-16'
          />
        )}
      </nav>
    </header>
  );
}

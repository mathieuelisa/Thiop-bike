"use client";

import Typography from "@/components/ui/Typography";
import Link from "next/link";
import React from "react";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { useMobileMenu } from "@/context/MobileMenuContext";
import BurgerMenuIcon from "@/components/ui/Icons/BurgerMenuIcon";
import CloseIcon from "@/components/ui/Icons/CloseIcon";
import { NAVBAR_CONTENT } from "./Navbar.data";

export default function Navbar() {
  const pathName = usePathname();

  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen } =
    useMobileMenu();

  return (
    <header className='sticky flex top-0 min-h-14 px-5 z-40 items-center border-b bg-colors-lightBlack border-gray-600 justify-between tablet:justify-normal'>
      <Link
        onClick={() => setMobileMenuOpen(false)}
        href='/'
        className='mr-5 flex items-center'
      >
        <Typography>THIOP</Typography>
      </Link>
      <nav className='hidden tablet:flex'>
        {NAVBAR_CONTENT.map((element) => {
          return (
            <Link
              href={element.link}
              key={element.label}
              className={twMerge(
                "mr-5 hover:text-red-600 transition duration-500 ease-in-out text-sm lg:text-base"
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

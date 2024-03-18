"use client";

import React, { useEffect } from "react";

import { usePathname } from "next/navigation";
import { NAVBAR_CONTENT_MOBILE } from "../Navbar/Navbar.data";
import { twJoin, twMerge } from "tailwind-merge";
import Typography from "@/components/ui/Typography";
import Link from "next/link";

import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { TpageProps } from "@/types/common";
import { useMobileMenu } from "@/context/MobileMenuContext";
import TwitterIcon from "@/components/ui/Icons/TwitterIcon";

import FacebookIcon from "@/components/ui/Icons/FacebookIcon";
import InstagramIcon from "@/components/ui/Icons/InstagramIcon";
import { useConditionText } from "@/context/ConditionsTextContext";
import { useTranslation } from "react-i18next";

export default function Base({ children }: TpageProps) {
  const { t } = useTranslation();

  const pathName = usePathname();

  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileMenu();
  const { isConditionOpen } = useConditionText();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className='bg-colors-lightgreen min-h-screen overflow-hidden'>
      <Navbar />
      {isConditionOpen && (
        <div className='bg-colors-gray-500  opacity-70 w-full absolute h-[1243px] z-40' />
      )}

      {/* MENU MOBILE RESPONSIVE */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.07 }}
          className={twJoin(
            "fixed h-[5180px] pt-11 p-5 bg-colors-lightbrown z-50 transform transition duration-1000 ease-in-out",
            isMobileMenuOpen ? "w-full" : "w-0"
          )}
        >
          {NAVBAR_CONTENT_MOBILE.map((element) => {
            return (
              <>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href={element.link}
                  key={element.label}
                  className={twMerge(
                    "mr-5 transform text-white hover:text-colors-lightbrown transition duration-500 ease-in-out text-sm lg:text-base",
                    pathName === element.link ||
                      (pathName.includes("assistance") &&
                        element.label === "Assistance")
                      ? "text-red-600"
                      : ""
                  )}
                >
                  <Typography className='text-xl font-yeseva'>
                    {t(element.label)}
                  </Typography>
                </Link>
              </>
            );
          })}

          <div className='flex border-t justify-center pt-7 border-colors-gray-50 gap-5 z-20 mt-9 tablet:mt-0'>
            <Link
              className='cursor-pointer'
              href='https://twitter.com/thiop'
              aria-label='Twitter Profile'
              passHref
            >
              <TwitterIcon className='h-6 duration-500 ease-in-out hover:text-white' />
            </Link>
            <Link
              className='cursor-pointer'
              href='https://www.instagram.com/thiop_thiop_bike'
              aria-label='Tiktok Profile'
              passHref
            >
              <InstagramIcon className='h-6 duration-500 ease-in-out hover:text-white' />
            </Link>
            <Link
              className='cursor-pointer'
              href='https://facebook.com/thiop'
              aria-label='Facebook Profile'
              passHref
            >
              <FacebookIcon className='h-6 duration-500 ease-in-out hover:text-white' />
            </Link>
          </div>
        </motion.div>
      )}
      <section>{children}</section>
      <Footer />
    </main>
  );
}

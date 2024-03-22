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

  // UseEffect for not scroll if mobile menu is open
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

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
            "fixed flex flex-col pt-24 items-center gap-11 h-[5180px] p-5 bg-colors-lightbrown z-50 transform transition duration-1000 ease-in-out",
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
                    "mr-5 transform text-white hover:text-colors-darkbrown transition duration-500 ease-in-out text-sm lg:text-base",
                    pathName === element.link ? "text-colors-darkbrown " : ""
                  )}
                >
                  <Typography className='text-5xl font-yeseva'>
                    {t(element.label)}
                  </Typography>
                </Link>
              </>
            );
          })}

          <div className='flex border-t justify-end pt-7 border-colors-gray-50 gap-5 z-20 mt-48 tablet:mt-0 w-4/5 mx-auto'>
            <Link
              className='cursor-pointer'
              href='https://www.instagram.com/thiop_thiop_bike'
              aria-label='Tiktok Profile'
              passHref
            >
              <InstagramIcon className='h-7 duration-500 ease-in-out hover:text-colors-darkbrown' />
            </Link>
            <Link
              className='cursor-pointer'
              href='https://facebook.com/thiop'
              aria-label='Facebook Profile'
              passHref
            >
              <FacebookIcon className='h-7 duration-500 ease-in-out hover:text-colors-darkbrown' />
            </Link>
          </div>
        </motion.div>
      )}
      <section>{children}</section>
      <Footer />
    </main>
  );
}

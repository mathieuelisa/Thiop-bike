"use client";

import React, { useEffect } from "react";

import { usePathname } from "next/navigation";
import { NAVBAR_CONTENT } from "../Navbar/Navbar.data";
import { twJoin, twMerge } from "tailwind-merge";
import Typography from "@/components/ui/Typography";
import Link from "next/link";

import { motion } from "framer-motion";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { TpageProps } from "@/types/common";
import { useMobileMenu } from "@/context/MobileMenuContext";

export default function Base({ children }: TpageProps) {
  const pathName = usePathname();

  const { isMobileMenuOpen, setMobileMenuOpen } = useMobileMenu();

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
    <main className='bg-colors-lightgreen min-h-screen'>
      <Navbar />

      {/* MENU MOBILE RESPONSIVE */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 1, x: -600 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className={twJoin(
            "fixed h-[5180px] p-5 bg-colors-lightbrown z-50 transform transition duration-1000 ease-in-out",
            isMobileMenuOpen ? "w-full" : "w-0"
          )}
        >
          {NAVBAR_CONTENT.map((element) => {
            return (
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
                <Typography className='text-xl'>{element.label}</Typography>
              </Link>
            );
          })}
        </motion.div>
      )}
      <section>{children}</section>
      <Footer />
    </main>
  );
}

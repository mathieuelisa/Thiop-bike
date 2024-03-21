"use client";

import Typography from "@/components/ui/Typography";
import React from "react";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

import Image from "next/image";
import { twJoin } from "tailwind-merge";
import { useRouter } from "next/navigation";

import { useTranslation } from "react-i18next";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 0.4,
    },
  },
  visibleSpan: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 1.2,
    },
  },
};
export default function Banner() {
  const { t } = useTranslation();

  const { push } = useRouter();

  return (
    <section className='relative overflow-hidden h-screen flex justify-center items-center'>
      <Image
        quality={20}
        className='absolute bottom-0 -right-32 opacity-10'
        width={800}
        height={800}
        src='/assets/images/home/bike.png'
        alt='leaf'
      />
      <Image
        quality={50}
        className='absolute -top-20 left-10 rotate-90 opacity-10'
        width={500}
        height={500}
        src='/assets/images/home/leaf.svg'
        alt='leaf'
      />
      <Image
        quality={50}
        className='absolute -top-24 -left-10 rotate-90 opacity-20'
        width={400}
        height={400}
        src='/assets/images/home/leaf.svg'
        alt='leaf'
      />
      <motion.div
        className='z-10'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <Typography
          type='h1'
          className={twJoin(
            "text-6xl text-colors-gray-50 font-yeseva uppercase font-black flex-col flex tablet:flex-row text-center tablet:text-start"
          )}
        >
          Let&#39;s ride{" "}
          <motion.span
            animate='visibleSpan'
            initial='hidden'
            variants={container}
            className='text-colors-lightbrown ml-4'
          >
            together.
          </motion.span>
        </Typography>
        <Typography className='font-semibold text-center tablet:text-start'>
          {t("home.banner.secondTitle")}
        </Typography>
        <Button
          type='button'
          onClick={() => push("/excursions")}
          color='transparent'
          className='mt-5 hover:text-colors-lightbrown hover:border-colors-lightbrown border-2 uppercase mx-auto tablet:mx-0'
        >
          {t("home.button.discover")}
        </Button>
      </motion.div>
    </section>
  );
}

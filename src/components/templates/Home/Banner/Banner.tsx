"use client";

import Typography from "@/components/ui/Typography";
import React from "react";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

import Image from "next/image";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      // duration: 6,
      delay: 0.4,
    },
  },
};
export default function Banner() {
  return (
    <section className='relative px-0 overflow-hidden h-screen flex justify-center items-center'>
      <Image
        quality={50}
        className='absolute bottom-10 right-0 opacity-10'
        width={700}
        height={700}
        src='/assets/images/home/bike.svg'
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
        <Typography className='uppercase text-6xl font-black flex-col flex tablet:flex-row text-center tablet:text-start'>
          Let&#39;s ride{" "}
          <span className='text-colors-lightbrown'>together.</span>
        </Typography>
        <Typography className='font-semibold text-center tablet:text-start'>
          Découvrez le Sénégal en vélo éléctrique
        </Typography>
        <Button
          type='button'
          color='transparent'
          className='mt-5 hover:text-colors-lightbrown mx-auto tablet:mx-0'
        >
          Découvrir
        </Button>
      </motion.div>
    </section>
  );
}

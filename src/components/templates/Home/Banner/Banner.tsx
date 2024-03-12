"use client";

import BikeIcon from "@/components/ui/Icons/BikeIcon";
import Typography from "@/components/ui/Typography";
import React from "react";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

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
      <BikeIcon className='absolute z-0 opacity-10 left-40 bottom-5 h-96 text-colors-gray-500' />
      <motion.div
        className='z-10'
        variants={container}
        initial='hidden'
        animate='visible'
      >
        <Typography className='uppercase text-6xl font-black'>
          Let&#39;s ride{" "}
          <span className='text-colors-lightbrown'>together.</span>
        </Typography>
        <Typography className='font-semibold'>
          Découvrez le Sénégal en vélo éléctrique
        </Typography>
        <Button
          type='button'
          color='transparent'
          className='mt-5 hover:text-colors-lightbrown'
        >
          Découvrir
        </Button>
      </motion.div>
    </section>
  );
}

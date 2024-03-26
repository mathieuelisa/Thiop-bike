"use client";

import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Teams() {
  const { t } = useTranslation();

  return (
    <section className='relative mx-5 tablet:px-20 '>
      <Image
        quality={50}
        className='absolute -top-20 right-2 rotate-180 opacity-5'
        width={500}
        height={500}
        src='/assets/images/home/leaf.svg'
        alt='leaf'
      />
      <Image
        quality={50}
        className='absolute top-80 -left-28 opacity-20'
        width={500}
        height={500}
        src='/assets/images/home/leaf.svg'
        alt='leaf'
      />
      <div className='flex justify-center flex-col items-center'>
        <Typography className='text-3xl text-colors-gray-50 text-center tablet:text-start tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          {t("teams.title")}
        </Typography>
        <Typography className='max-w-2xl text-sm tablet:text-base text-colors-gray-50 text-center mt-4'>
          {t("teams.description")}
        </Typography>
      </div>

      <div className='flex flex-wrap justify-center'>
        <div className='flex flex-wrap justify-between'>
          <Image
            quality={50}
            width={500}
            height={500}
            className='z-10'
            src='/assets/images/teams/cheick.png'
            alt='team'
          />
          <Image
            quality={50}
            width={500}
            height={500}
            className='z-20'
            src='/assets/images/teams/cherif.png'
            alt='team'
          />
          <Image
            quality={50}
            width={500}
            height={500}
            className='z-10'
            src='/assets/images/teams/filles.png'
            alt='team'
          />
        </div>
      </div>
    </section>
  );
}

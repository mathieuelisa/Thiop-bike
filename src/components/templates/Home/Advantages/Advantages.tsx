"use client";

import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";
import { Trans, useTranslation } from "react-i18next";

export default function Advantages() {
  const { t } = useTranslation();

  return (
    <section className='relative flex flex-col tablet:gap-0 gap-12 mb-44'>
      {/* First advantage */}
      <div className='flex flex-col tablet:flex-row items-center'>
        <div className=' flex flex-col w-full tablet:w-1/2'>
          <Image
            quality={50}
            className='absolute top-11 -left-28 rotate-90 opacity-10'
            width={300}
            height={300}
            src='/assets/images/home/leaf.svg'
            alt='leaf'
          />
          <Image
            quality={50}
            className='absolute top-48 left-96 opacity-10'
            width={300}
            height={300}
            src='/assets/images/home/senegal.png'
            alt='senegal'
          />

          <Typography className='mb-5 text-colors-gray-50 text-2xl uppercase tablet:text-4xl text-center tablet:text-start font-yeseva'>
            <Trans
              i18nKey='advantage.first.title'
              components={{
                span: <span className='text-colors-lightbrown font-semibold' />,
              }}
            />
          </Typography>
          <Typography className='text-sm text-colors-gray-50 z-10 tablet:text-xl leading-relaxed text-center tablet:text-start'>
            {t("advantage.first.description")}
          </Typography>
        </div>
        <div className='tablet:w-1/2 w-full flex justify-center items-center mt-9'>
          <Image
            quality={50}
            width={500}
            height={500}
            className='z-10'
            src='/assets/images/home/polaroid_bike.png'
            alt='polaroid_bike'
          />
        </div>
      </div>

      {/* Second advantage */}
      <div className='flex flex-col-reverse tablet:flex-row items-center'>
        <div className='tablet:w-1/2 w-full flex justify-center items-center mt-9'>
          <Image
            quality={50}
            width={500}
            height={500}
            src='/assets/images/home/polaroid_boat.png'
            className='z-10'
            alt='polaroid_boat'
          />
        </div>
        <div className='flex flex-col tablet:w-1/2 w-full'>
          <Typography className='mb-5 text-2xl text-colors-gray-50 uppercase tablet:text-4xl text-center tablet:text-start font-yeseva'>
            <Trans
              i18nKey='advantage.second.title'
              components={{
                span: <span className='text-colors-lightbrown font-semibold' />,
              }}
            />
          </Typography>
          <Typography className='text-sm text-colors-gray-50 z-10 tablet:text-xl leading-relaxed text-center tablet:text-start'>
            {t("advantage.second.description")}
          </Typography>
        </div>
      </div>

      {/* third advantage */}
      <div className='flex flex-col tablet:flex-row items-center'>
        <div className=' flex flex-col w-full tablet:w-1/2'>
          <Image
            quality={50}
            className='absolute top-11 -left-28 rotate-90 opacity-10'
            width={300}
            height={300}
            src='/assets/images/home/leaf.svg'
            alt='leaf'
          />
          <Image
            quality={50}
            className='absolute top-48 left-96 opacity-10'
            width={300}
            height={300}
            src='/assets/images/home/senegal.png'
            alt='leaf'
          />

          <Typography className='mb-5 uppercase text-colors-gray-50 text-2xl tablet:text-4xl text-center tablet:text-start font-yeseva'>
            <Trans
              i18nKey='advantage.third.title'
              components={{
                span: <span className='text-colors-lightbrown font-semibold' />,
              }}
            />
          </Typography>
          <Typography
            className='text-sm text-colors-gray-50
           tablet:text-xl leading-relaxed text-center tablet:text-start'
          >
            {t("advantage.third.description")}
          </Typography>
        </div>
        <div className='tablet:w-1/2 w-full flex justify-center items-center mt-9'>
          <Image
            quality={50}
            width={500}
            height={500}
            className='z-10'
            src='/assets/images/home/polaroid_bike.png'
            alt='polaroid_bike'
          />
        </div>
      </div>
    </section>
  );
}

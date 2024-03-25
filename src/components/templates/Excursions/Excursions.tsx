"use client";

import React from "react";
import { EXCURSIONS_DATASET } from "./Excursions.data";

import Typography from "@/components/ui/Typography";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

export default function Excursions() {
  const { t } = useTranslation();

  return (
    <section className='mx-5 tablet:px-20'>
      <div className='flex flex-col items-center'>
        <Typography className='text-3xl text-colors-gray-50 text-center tablet:text-start tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          {t("excursions.title")}
        </Typography>
        <Typography className='max-w-2xl text-sm tablet:text-base text-colors-gray-50 text-center mt-4'>
          {t("excursions.description")}
        </Typography>
      </div>
      <section className=' flex flex-col gap-5 mt-14 max-w-[900px] mx-auto'>
        {EXCURSIONS_DATASET.map((element) => (
          <Link key={element.id} href={element.urlPath}>
            <div
              key={element.id}
              className='group/item relative overflow-hidden bg-colors-gray-50 rounded-lg hover:scale-[1.02] cursor-pointer transition-all duration-500 ease-in-out shadow-lg'
            >
              {/* Image layer */}
              <div className='flex direction-row justify-end'>
                <Image
                  quality={50}
                  className='object-cover bg-colors-gray-50 z-0 w-full max-w-[280px] h-full max-h-[130px]'
                  width={300}
                  height={200}
                  src={element.image}
                  alt='senegal'
                />
              </div>

              <div className='absolute inset-0 bg-gradient-to-r from-white from-70%' />

              {/* Text Layer */}
              <div className='absolute inset-0'>
                <div className='flex direction-row items-center justify-between h-full w-full'>
                  <div className='flex flex-col p-4 justify-center items-start h-full w-full'>
                    <Typography className='text-colors-darkplusgreen text-base tablet:text-xl font-yeseva '>
                      {t(element.title)}
                    </Typography>
                    <div className='bg-colors-gray-50 border-colors-gray-500 border mt-2 p-0 tablet:p-1 w-24 rounded-2xl flex justify-center'>
                      <Typography className='text-xs text-colors-middlegreen '>
                        {t(element.time)}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
}

"use client";

import React from "react";
import { EXCURSIONS_DATASET } from "./Excursions.data";

import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Excursions() {
  const { t } = useTranslation();

  const { push } = useRouter();

  return (
    <section className='mx-5 tablet:px-20'>
      <div className='flex flex-col items-center'>
        <Typography className='text-3xl text-center tablet:text-start tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          {t("excursions.title")}
        </Typography>
        <Typography className='max-w-2xl text-center mt-4'>
          {t("excursions.description")}
        </Typography>
      </div>
      <section className=' flex flex-col gap-5 mt-14'>
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
                  className='object-cover bg-colors-red-200 z-0 w-full max-w-[280px] h-full max-h-[130px]'
                  width={300}
                  objectFit='cover'
                  height={200}
                  src={element.image}
                  alt='senegal'
                />
              </div>

              <div className='absolute inset-0 bg-gradient-to-r from-white from-70%' />

              {/* Text Layer */}
              <div className='absolute inset-0'>
                <div className='flex direction-row items-center justify-between h-full w-full'>
                  <div className='flex flex-col p-6 justify-center items-start h-full w-full'>
                    <Typography className='text-colors-darkplusgreen text-lg tablet:text-xl font-yeseva '>
                      {t(element.title)}
                    </Typography>
                    <div className='bg-colors-gray-50 border-colors-gray-500 border mt-2 p-0 tablet:p-1 w-24 rounded-2xl flex justify-center'>
                      <Typography className='text-xs text-colors-middlegreen '>
                        {t(element.time)}
                      </Typography>
                    </div>
                  </div>
                  {/* <div className='max-w-[280px] w-full h-full flex justify-center items-center'>
                    <Button
                      href={element.urlPath}
                      type='button'
                      className='group/btn opacity-0 shadow-lg group-hover/item:opacity-100 duration-300 transition-opacity ease-in-out uppercase rounded-md px-4 py-2 bg-colors-gray-50 text-colors-middlegreen'
                    >
                      <Typography className='text-xs text-end tablet:text-center tablet:text-sm uppercase font-semibold font-yeseva group-hover/btn:underline'>
                        {t("common.seeMore")}
                      </Typography>
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
}

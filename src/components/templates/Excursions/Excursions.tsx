"use client";

import React from "react";
import { EXCURSIONS_DATASET } from "./Excursions.data";

import Typography from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import { useTranslation } from "react-i18next";

export default function Excursions() {
  const { t } = useTranslation();

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
      <section className='flex flex-col gap-5 mt-14'>
        {EXCURSIONS_DATASET.map((element) => (
          <>
            <div
              key={element.id}
              className='flex group justify-between items-center bg-colors-gray-50 rounded-lg p-6 hover:bg-colors-darkgreen duration-300 ease-in-out transition-all'
            >
              <div className='flex flex-col'>
                <Typography className='text-colors-darkplusgreen text-lg tablet:text-xl font-yeseva group-hover:text-colors-gray-50 '>
                  {t(element.title)}
                </Typography>
                <div className='bg-colors-gray-50 border-colors-gray-500 border mt-2 p-1 w-24 rounded-2xl flex justify-center'>
                  <Typography className='text-xs text-colors-middlegreen group-hover:text-colors-middlegreen'>
                    {t(element.time)}
                  </Typography>
                </div>
              </div>

              <Button
                href={element.urlPath}
                type='button'
                className='uppercase border border-colors-gray-50 text-colors-middlegreen tablet:text-colors-gray-50 rounded-md px-4 py-2 hover:bg-colors-gray-50 hover:text-colors-middlegreen'
              >
                <Typography className='text-xs text-end tablet:text-center w-28 tablet:text-sm uppercase font-semibold font-yeseva'>
                  {t("common.seeMore")}
                </Typography>
              </Button>
            </div>
          </>
        ))}
      </section>
    </section>
  );
}

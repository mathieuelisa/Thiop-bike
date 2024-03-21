"use client";

import React from "react";
import { EXCURSIONS_DATASET } from "../Excursions/Excursions.data";
import { useParams } from "next/navigation";
import Typography from "@/components/ui/Typography";
import Reservations from "../Reservations";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/ui/Icons/ArrowRightIcon";
import { useTranslation } from "react-i18next";

export default function Excursion() {
  const { t } = useTranslation();

  const { id } = useParams();

  const excursionId = EXCURSIONS_DATASET.find((element) =>
    element.urlPath.includes(id as string)
  );
  return (
    <section className='w-full flex'>
      <div className='flex-col flex tablet:flex-row'>
        <div className='tablet:w-1/2 w-full flex items-center flex-col mt-3 tablet:mt-10 tablet:px-10'>
          <Button
            href='/excursions'
            className='mr-auto ml-7 tablet:ml-0 uppercase text-colors-gray-50 hover:text-colors-middlebrown text-sm tablet:text-base'
          >
            <ArrowRightIcon className='h-6 rotate-180 mr-2 hidden tablet:block' />{" "}
            {t("common.back")}
          </Button>
          <Image
            quality={50}
            className=' left-10'
            width={600}
            height={600}
            src={excursionId?.imageDetail || ""}
            alt='elephant'
          />

          <Typography className='text-center text-colors-gray-50 mt-5'>
            {t(excursionId?.description || "")}
          </Typography>
        </div>

        <div className='tablet:w-1/2 w-full'>
          <Reservations titleExcursion={excursionId?.title || ""} />
        </div>
      </div>
    </section>
  );
}

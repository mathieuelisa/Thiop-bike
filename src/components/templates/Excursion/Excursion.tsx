"use client";

import React from "react";
import { EXCURSIONS_DATASET } from "../Excursions/Excursions.data";
import { useParams } from "next/navigation";
import Typography from "@/components/ui/Typography";
import Reservations from "../Reservations";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ArrowRightIcon from "@/components/ui/Icons/ArrowRightIcon";

export default function Excursion() {
  const { id } = useParams();

  const excursionId = EXCURSIONS_DATASET.find((element) =>
    element.urlPath.includes(id as string)
  );
  return (
    <section className='w-full flex'>
      <div className='flex-col flex tablet:flex-row'>
        <div className='tablet:w-1/2 w-full flex items-center flex-col mt-10 tablet:px-10'>
          <Button
            href='/excursions'
            className='mr-auto hover:text-colors-middlebrown'
          >
            <ArrowRightIcon className='h-6 rotate-180 mr-2' /> RETOUR
          </Button>
          <Image
            quality={50}
            className=' left-10'
            width={300}
            height={250}
            src={excursionId?.image || ""}
            alt='elephant'
          />

          <Typography className='text-center mt-5'>
            {excursionId?.description}
          </Typography>
        </div>

        <div className='tablet:w-1/2 w-full'>
          <Reservations titleExcursion={excursionId?.title || ""} />
        </div>
      </div>
    </section>
  );
}
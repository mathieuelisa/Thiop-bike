"use client";

import React from "react";
import { EXCURSIONS_DATASET } from "../Excursions/Excursions.data";
import { useParams } from "next/navigation";
import Typography from "@/components/ui/Typography";
import Reservations from "../Reservations";
import Image from "next/image";

export default function Excursion() {
  const { id } = useParams();

  const excursionId = EXCURSIONS_DATASET.find((element) =>
    element.urlPath.includes(id as string)
  );
  return (
    <section className='w-full flex'>
      <div className='flex '>
        <div className='w-1/2 flex items-center flex-col mt-10 tablet:px-10'>
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

        <div className='w-1/2'>
          <Reservations titleExcursion={excursionId?.title || ""} />
        </div>
      </div>
    </section>
  );
}

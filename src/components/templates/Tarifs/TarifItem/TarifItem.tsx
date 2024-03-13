"use client";

import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TARIF_PART, TpriceCFAContent } from "../Tarifs.data";

type Props = {
  element: TpriceCFAContent;
  index: number;
};

export default function TarifItem({ element, index }: Props) {
  const isLastElement = index === TARIF_PART.length - 1;

  return (
    <div
      key={element.id}
      className={twMerge(
        "relative mx-4 border overflow-hidden w-[290px] h-[400px] p-5 flex shadow-lg items-start flex-col rounded-lg text-colors-black",
        isLastElement
          ? "bg-colors-middlegreen text-colors-gray-50"
          : "bg-colors-gray-50 border-colors-gray-400 "
      )}
    >
      <Image
        quality={50}
        className='absolute top-0 right-0 opacity-10'
        width={700}
        height={700}
        src='/assets/images/offers/multi_leafs.png'
        alt='leaf'
      />
      <Typography className='font-black text-lg'>{element.title}</Typography>
      <Typography
        className={twMerge(
          "text-xs mb-5",
          isLastElement ? "text-white" : "text-colors-gray-500"
        )}
      >
        {element.description}
      </Typography>

      {element.tarifs.map((element) => {
        return (
          <div
            key={element.id}
            className='flex justify-between w-full items-center mb-4'
          >
            <Typography className='text-xs'>
              {element.numberCustomer}
            </Typography>
            <div className='flex flex-col'>
              <Typography className='text-xs'>
                {element.priceCFA} CFA
              </Typography>

              <Typography className='font-semibold text-base'>
                <span
                  className={twMerge(
                    "text-xs font-normal text-colors-gray-500",
                    isLastElement ? "text-white" : "text-colors-gray-500"
                  )}
                >
                  soit
                </span>{" "}
                {element.priceEUR} EUR
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
}

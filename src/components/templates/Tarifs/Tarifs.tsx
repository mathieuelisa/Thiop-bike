"use client";

import Typography from "@/components/ui/Typography";
import React from "react";
import { TARIF_PART, TpriceCFAContent } from "./Tarifs.data";
import TarifItem from "./TarifItem";
import useIsTablet from "@/hooks/useBreakPoint";
import Carousel from "nuka-carousel";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

export default function Tarifs() {
  const { t } = useTranslation();

  const isTablet = useIsTablet();

  const renderDots = (elems: any) => {
    const { slideCount, currentSlide, goToSlide } = elems;
    return (
      <div className='flex flex-row justify-center gap-2 p-6'>
        {Array(slideCount)
          .fill("_")
          .map((_, index) => (
            <button
              key={index}
              className={twMerge(
                "h-3 rounded-full bg-colors-darkgreen transition-all duration-200",
                currentSlide === index ? "w-6 opacity-100" : "w-3 opacity-50"
              )}
              onClick={() => goToSlide(index)}
            />
          ))}
      </div>
    );
  };

  return (
    <section className='mx-5 tablet:px-20 h-screen'>
      <div className='flex justify-center flex-col items-center'>
        <Typography className='text-3xl text-colors-gray-50 text-center tablet:text-start tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          {t("prices.title")}
        </Typography>
        <Typography className='max-w-2xl color text-sm tablet:text-base text-colors-gray-50 text-center mt-4'>
          {t("prices.description")}
        </Typography>

        <section className='mt-11'>
          {isTablet && (
            <Carousel
              defaultControlsConfig={{
                pagingDotsStyle: {
                  fill: "brown",
                },
              }}
              renderBottomCenterControls={renderDots}
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
              autoplay
              style={{ height: "100%" }}
              autoplayInterval={5000}
              wrapAround={true}
              dragging
              speed={2000}
              withoutControls={false}
              className='cursor-grabbing aspect-square'
            >
              {TARIF_PART.map((element: TpriceCFAContent, index) => (
                <TarifItem key={element.id} element={element} index={index} />
              ))}
            </Carousel>
          )}

          {!isTablet && (
            <section className='flex justify-around w-full my-10 gap-6'>
              {TARIF_PART.map((element: TpriceCFAContent, index) => (
                <TarifItem key={element.id} element={element} index={index} />
              ))}
            </section>
          )}
        </section>
      </div>
    </section>
  );
}

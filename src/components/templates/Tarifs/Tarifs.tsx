"use client";

import Typography from "@/components/ui/Typography";
import React from "react";
import { TARIF_PART, TpriceCFAContent } from "./Tarifs.data";
import TarifItem from "./TarifItem";
import useIsTablet from "@/hooks/useBreakPoint";
import Carousel from "nuka-carousel";

export default function Tarifs() {
  const isTablet = useIsTablet();

  return (
    <section className='mx-5 tablet:px-20 h-screen'>
      <div className='flex justify-center flex-col items-center'>
        <Typography className='text-3xl text-center tablet:text-start tablet:text-4xl mt-10 font-black uppercase font-yeseva'>
          Profitez de nos offres
        </Typography>
        <Typography className='max-w-2xl text-center mt-4'>
          Trois expériences captivantes vous attendent lors de votre visite.
          Nous sommes là pour répondre à tous vos besoins. N&#39;hésitez pas à
          nous contacter par e-mail pour toute demande spécifique ou pour
          réserver votre expérience dès maintenant.
        </Typography>

        {/* Offers part */}
        <section className='mt-11'>
          {isTablet && (
            <Carousel
              autoplay={true}
              autoplayInterval={3000}
              wrapAround={true}
              dragging
              speed={2000}
              withoutControls={true}
              className='cursor-grabbing'
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

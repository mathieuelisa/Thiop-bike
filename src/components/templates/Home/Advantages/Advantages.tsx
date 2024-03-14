"use client";

import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";

export default function Advantages() {
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

          <Typography className='mb-5 text-3xl tablet:text-4xl text-center tablet:text-start font-yeseva'>
            VIVEZ UNE EXPERIENCE{" "}
            <span className='text-colors-lightbrown'>INÉDITE</span>
          </Typography>
          <Typography className='text-base z-10 tablet:text-xl leading-relaxed text-center tablet:text-start'>
            À vélo, découvrir un pays devient une expérience immersive où chaque
            coup de pédale révèle des trésors cachés et des rencontres
            authentiques, transformant le voyage en une aventure humaine
            inoubliable.
          </Typography>
        </div>
        <div className='tablet:w-1/2 w-full flex justify-center items-center mt-9'>
          <Image
            quality={50}
            width={500}
            height={500}
            className='z-10'
            src='/assets/images/home/polaroid1.png'
            alt='polaroid'
          />
        </div>
      </div>

      {/* Second advantage */}
      <div className='flex flex-col-reverse tablet:flex-row items-center'>
        <Image
          quality={50}
          className='absolute -bottom-48 right-0 opacity-10'
          width={300}
          height={300}
          src='/assets/images/home/elephant.svg'
          alt='elephant'
        />

        <div className='tablet:w-1/2 w-full flex justify-center items-center mt-9'>
          <Image
            quality={50}
            width={500}
            height={500}
            src='/assets/images/home/polaroid2.png'
            className='z-10'
            alt='polaroid'
          />
        </div>
        <div className='flex flex-col tablet:w-1/2 w-full'>
          <Typography className='mb-5 text-3xl tablet:text-4xl text-center tablet:text-start font-yeseva'>
            DÉCOUVREZ
            <span className='text-colors-lightbrown'>
              {" "}
              D&#39;INCROYABLES ENDROITS
            </span>
          </Typography>
          <Typography className='text-base z-10 tablet:text-xl leading-relaxed text-center tablet:text-start'>
            Au cours de votre périple à vélo, vous découvrirez des paysages
            magnifiques qui émerveilleront vos sens à chaque tournant. Des
            montagnes majestueuses aux vallées luxuriantes, chaque coup de
            pédale vous emmènera à travers des panoramas spectaculaires, offrant
            une expérience inoubliable au cœur de la nature.
          </Typography>
        </div>
      </div>

      {/* hird advantage */}
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

          <Typography className='mb-5 text-3xl text-colors-lightbrown tablet:text-4xl text-center tablet:text-start font-yeseva'>
            DÉGUSTEZ DES PLATS{" "}
            <span className='text-colors-gray-50'>INCROYABLE</span>
          </Typography>
          <Typography className='text-base tablet:text-xl leading-relaxed text-center tablet:text-start'>
            Pendant votre expédition à vélo, vous découvrirez de délicieux plats
            africains, des saveurs authentiques et des recettes traditionnelles
            riches en histoire, offrant une expérience culinaire unique par
            notre chef cuistot !
          </Typography>
        </div>
        <div className='tablet:w-1/2 w-full flex justify-center items-center mt-9'>
          <Image
            quality={50}
            width={500}
            height={500}
            className='z-10'
            src='/assets/images/home/polaroid1.png'
            alt='polaroid'
          />
        </div>
      </div>
    </section>
  );
}

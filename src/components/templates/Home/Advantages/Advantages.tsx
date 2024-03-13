"use client";

import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";

export default function Advantages() {
  return (
    <section className='relative flex flex-col gap-12 mb-44'>
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

          <Typography className='mb-5 text-3xl tablet:text-4xl text-center tablet:text-start'>
            VIVEZ UNE EXPERIENCE{" "}
            <span className='text-colors-darkgreen'>INEDITE</span>
          </Typography>
          <Typography className='text-base tablet:text-xl leading-relaxed text-center tablet:text-start'>
            Our theme lets you integrate Google Maps on any of your pages. Not
            only this, but the maps are fully customizable so you can use the
            style that fits you the most! You can also easily pin the
            destinations from your posts right on the map!
          </Typography>
        </div>
        <div className='w-1/2 flex justify-center items-center mt-9'>
          PHOTOS
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

        <div className='w-1/2 flex justify-center items-center mt-9'>
          PHOTOS
        </div>
        <div className='flex flex-col tablet:w-1/2 w-full'>
          <Typography className='mb-5 text-3xl tablet:text-4xl text-center tablet:text-start'>
            DECOUVREZ
            <span className='text-colors-darkgreen'>
              {" "}
              D&#39;INCROYABLE ENDROITS
            </span>
          </Typography>
          <Typography className='text-base tablet:text-xl leading-relaxed text-center tablet:text-start'>
            Our theme lets you integrate Google Maps on any of your pages. Not
            only this, but the maps are fully customizable so you can use the
            style that fits you the most! You can also easily pin the
            destinations from your posts right on the map!
          </Typography>
        </div>
      </div>
    </section>
  );
}

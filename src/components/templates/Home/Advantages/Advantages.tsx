import ElephantIcon from "@/components/ui/Icons/ElephantIcon";
import Typography from "@/components/ui/Typography";
import React from "react";

export default function Advantages() {
  return (
    <section className='relative flex flex-col gap-12 mb-44'>
      <div className='flex'>
        <div className='flex flex-col w-1/2'>
          <Typography className='mb-5 text-4xl'>
            VIVEZ UNE EXPERIENCE{" "}
            <span className='text-colors-darkgreen'>INEDITE</span>
          </Typography>
          <Typography className='text-xl leading-relaxed'>
            Our theme lets you integrate Google Maps on any of your pages. Not
            only this, but the maps are fully customizable so you can use the
            style that fits you the most! You can also easily pin the
            destinations from your posts right on the map!
          </Typography>
        </div>
        <div className='w-1/2 flex justify-center items-center'>PHOTOS</div>
      </div>

      <div className='flex'>
        <ElephantIcon className='absolute z-0 opacity-10  h-96 text-colors-gray-500' />

        <div className='w-1/2 flex justify-center items-center'>PHOTOS</div>
        <div className='flex flex-col w-1/2'>
          <Typography className='mb-5 text-4xl'>
            DECOUVREZ
            <span className='text-colors-darkgreen'>
              {" "}
              D&#39;INCROYABLE ENDROITS
            </span>
          </Typography>
          <Typography className='text-xl leading-relaxed'>
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

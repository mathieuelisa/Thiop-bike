import Typography from "@/components/ui/Typography";
import React from "react";

export default function Advantages() {
  return (
    <section className='flex flex-col gap-12 mb-44'>
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

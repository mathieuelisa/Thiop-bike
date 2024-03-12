import Typography from "@/components/ui/Typography";

import Link from "next/link";
import React from "react";
import { FIRST_FOOTER_CONTENT, TFooterLink } from "./Footer.data";
import TwitterIcon from "@/components/ui/Icons/TwitterIcon";
import FacebookIcon from "@/components/ui/Icons/FacebookIcon";
import TiktokIcon from "@/components/ui/Icons/TiktokIcon";

export default function Footer() {
  return (
    <footer className=' bg-red-600'>
      <div className=' h-80 absolute w-full' />

      <div className='w-full py-5' />
      <div className=' pb-10 px-10 tablet:px-40'>
        <div className='flex justify-between items-center flex-col tablet:flex-row'>
          <div className='flex justify-center gap-11 tablet:gap-36 pt-10'>
            <div className='flex flex-col z-20 items-center tablet:items-start'>
              <Typography className='font-bold mb-5 text-white text-xl font-matisan'>
                Thiop Thiop Bike
              </Typography>
              <Typography className='font-semibold mb-2 text-sm'>
                Aide & Tarifs
              </Typography>

              {FIRST_FOOTER_CONTENT.map((element: TFooterLink) => {
                return (
                  <Link
                    className='hover:underline text-xs'
                    href={element.link}
                    key={element.label}
                  >
                    {element.label}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='flex gap-5 z-20 mt-9 tablet:mt-0'>
            <Link
              className='cursor-pointer'
              href='https://twitter.com/thiop'
              aria-label='Twitter Profile'
              passHref
            >
              <TwitterIcon className='h-6 duration-500 ease-in-out hover:text-white' />
            </Link>
            <Link
              className='cursor-pointer'
              href='https://tiktok.com/thiop'
              aria-label='Tiktok Profile'
              passHref
            >
              <TiktokIcon className='h-6 duration-500 ease-in-out hover:text-white' />
            </Link>
            <Link
              className='cursor-pointer'
              href='https://facebook.com/thiop'
              aria-label='Facebook Profile'
              passHref
            >
              <FacebookIcon className='h-6 duration-500 ease-in-out hover:text-white' />
            </Link>
          </div>
        </div>

        <Typography className='text-center text-xs mt-10'>
          Copyright &#169; 2024
        </Typography>
      </div>
    </footer>
  );
}

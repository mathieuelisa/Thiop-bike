"use client";

import { twMerge } from "tailwind-merge";
import Typography from "../Typography";

type TSectionHeaderProps = {
  subHeader: string;
  header: string;
  className?: string;
};

export default function SectionHeader({
  subHeader,
  header,
  className,
}: TSectionHeaderProps) {
  return (
    <div className={twMerge("flex items-center flex-col py-16", className)}>
      <Typography
        className='text-white text-center tablet:text-start'
        type='h3'
      >
        {subHeader}
      </Typography>
      <Typography
        type='h3'
        className='text-colors-red-200 text-2xl tablet:text-3xl font-semibold text-center tablet:text-start'
      >
        {header}
      </Typography>
    </div>
  );
}

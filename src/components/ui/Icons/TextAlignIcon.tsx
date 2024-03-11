import { TIcons } from "@/types/common";

export default function TextAlignIcon({ className }: TIcons) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
      className={className}
    >
      <rect width='256' height='256' fill='none' />
      <line
        x1='40'
        y1='64'
        x2='216'
        y2='64'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <line
        x1='64'
        y1='104'
        x2='192'
        y2='104'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <line
        x1='40'
        y1='144'
        x2='216'
        y2='144'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <line
        x1='64'
        y1='184'
        x2='192'
        y2='184'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
    </svg>
  );
}

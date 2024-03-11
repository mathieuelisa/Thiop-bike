import { TIcons } from "@/types/common";

export default function ArrowUpIcon({ className }: TIcons) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      <rect width='256' height='256' fill='none' />
      <polygon
        points='32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <line
        x1='176'
        y1='216'
        x2='80'
        y2='216'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <line
        x1='176'
        y1='184'
        x2='80'
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

import { TIcons } from "@/types/common";

export default function ArrowRightIcon({ className }: TIcons) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      <rect width='256' height='256' fill='none' />
      <line
        x1='40'
        y1='128'
        x2='216'
        y2='128'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <polyline
        points='144 56 216 128 144 200'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
    </svg>
  );
}

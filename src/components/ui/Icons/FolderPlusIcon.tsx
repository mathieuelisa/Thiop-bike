import { TIcons } from "@/types/common";

export default function FolderPlusIcon({ className }: TIcons) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      <rect width='256' height='256' fill='none' />
      <path
        d='M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V104'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <path
        d='M93.33,104H32V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80,98.13,102.4A8,8,0,0,1,93.33,104Z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <line
        x1='104'
        y1='152'
        x2='152'
        y2='152'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <line
        x1='128'
        y1='128'
        x2='128'
        y2='176'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
    </svg>
  );
}

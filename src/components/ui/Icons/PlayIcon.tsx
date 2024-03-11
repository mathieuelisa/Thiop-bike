import { TIcons } from "@/types/common";

export default function PlayIcon({ className }: TIcons) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      <rect width='256' height='256' fill='none' />
      <path
        d='M72,39.88V216.12a8,8,0,0,0,12.15,6.69l144.08-88.12a7.82,7.82,0,0,0,0-13.38L84.15,33.19A8,8,0,0,0,72,39.88Z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
      />
    </svg>
  );
}

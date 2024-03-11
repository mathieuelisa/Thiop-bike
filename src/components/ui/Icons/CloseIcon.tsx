import { TIcons } from "@/types/common";

export default function CloseIcon({ className, onClick }: TIcons) {
  return (
    <svg
      width='800px'
      height='800px'
      onClick={onClick}
      className={className}
      viewBox='-0.5 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3 21.32L21 3.32001'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 3.32001L21 21.32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

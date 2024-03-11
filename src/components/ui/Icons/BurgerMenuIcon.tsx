import { TIcons } from "@/types/common";

export default function BurgerMenuIcon({ className, onClick }: TIcons) {
  return (
    <svg
      width='800px'
      onClick={onClick}
      height='800px'
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5 8H13.75M5 12H19M10.25 16L19 16'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

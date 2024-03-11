import { TIcons } from "@/types/common";

export default function TchatIcon({ className }: TIcons) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      <rect width='256' height='256' fill='none' />
      <path
        d='M160,224a72,72,0,1,1,63.23-37.53l8.53,29.87a6,6,0,0,1-7.42,7.42l-29.87-8.53A71.71,71.71,0,0,1,160,224Z'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <path
        d='M92.06,175.89a71.51,71.51,0,0,1-30.53-8.66l-29.87,8.53a6,6,0,0,1-7.42-7.42l8.53-29.87A72,72,0,1,1,163.94,80.11'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='12'
      />
      <circle cx='132' cy='140' r='10' />
      <circle cx='188' cy='140' r='10' />
    </svg>
  );
}

import localFont from "next/font/local";

const Matisan = localFont({
  src: [
    {
      path: "../public/assets/fonts/matisan/Matisan.otf",
    },
  ],
  variable: "--font-matisan",
});

const Abril = localFont({
  src: [
    {
      path: "../public/assets/fonts/abril/Abril.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-abril",
});

const Yeseva = localFont({
  src: [
    {
      path: "../public/assets/fonts/yeseva/Yeseva.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-yeseva",
});

export { Matisan, Abril, Yeseva };

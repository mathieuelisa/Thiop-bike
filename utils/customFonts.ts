import localFont from "next/font/local";

const Matisan = localFont({
  src: [
    {
      path: "../public/assets/fonts/matisan/Matisan.otf",
    },
  ],
  variable: "--font-matisan",
});

export { Matisan };

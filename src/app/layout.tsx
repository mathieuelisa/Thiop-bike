import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Base from "@/components/layouts/Base";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { Abril, Matisan, Yeseva } from "../../utils/customFonts";
import { ConditionTextProvider } from "@/context/ConditionsTextContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body
        className={`${Matisan.variable} ${Abril.variable} ${Yeseva.variable}`}
      >
        <ConditionTextProvider>
          <MobileMenuProvider>
            <Base>{children}</Base>
          </MobileMenuProvider>
        </ConditionTextProvider>
      </body>
    </html>
  );
}

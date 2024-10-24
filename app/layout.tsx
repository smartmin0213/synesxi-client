import type { Metadata } from "next";
import "./globals.css";

import SideBar from "@/components/sidebar";
import TopBar from "@/components/topbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Synesxi",
  description: "Synesxi Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-[1440px] mx-auto flex">
          <div className="w-[216px] h-[826px] mr-[17px]">
            <SideBar />
          </div>
          <div className="w-[1207px]">
            <TopBar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

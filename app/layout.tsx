'use client';

import './globals.css';

import { usePathname } from 'next/navigation';

import SideBar from '@/components/sidebar';
import TopBar from '@/components/topbar';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const getContent = () => {
    const modals = ['/login', '/register'];
    if (modals.includes(pathname)) {
      return children;
    } else {
      return (
        <>
          <TopBar />
          {children}
          <Footer />
        </>
      );
    }
  };

  return (
    <html lang='en'>
      <head>
        <title>Synesxi</title>
      </head>
      <body>
        <div className='max-w-[1440px] mx-auto flex bg-[#1F1F24]'>
          <div className='w-[216px] h-[826px] mr-[17px]'>
            <SideBar />
          </div>
          <div className='w-[1207px]'>
            {getContent()}
          </div>
        </div>
      </body>
    </html>
  );
}
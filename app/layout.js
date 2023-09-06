import localFont from 'next/font/local';

import './globals.css';

import { Header } from './_componets/Header/Header';
import Footer from './_componets/Footer/Footer';

const myFont = localFont({
  variable: '--font-muller',
  src: [
    {
      path: '../fonts/MullerRegular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/MullerMedium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/MullerBold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata = {
  title: 'Limon Car',
  description: 'Limon Car ren',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.variable}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}

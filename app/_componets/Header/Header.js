import Link from 'next/link';

import Logo from '@/public/images/logo.svg';
import LogoSec from '@/public/images/logo-sec.svg';

import Container from '../Container/Container';
import style from './header.module.scss';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className={style.header_section}>
      <Container>
        <nav className={style.wrapper}>
          <Link href="/">
            <div className={style.header_wrapp}>
              <Image src={Logo} alt="logo" />
              <Image src={LogoSec} alt="logo" />
            </div>
          </Link>
          <ul className={style.navigation}>
            <li>
              <Link href="/carlist">Car List</Link>
            </li>
            <li>
              <Link href="/viptransfer">VIP Transfer</Link>
            </li>
            <li>
              <Link href="/yachts">Yachts</Link>
            </li>
            <li>
              <Link href="/photshoots">Photshoots with car</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

import Link from 'next/link';

import Logo from '@/public/images/logo.svg';
import LogoSec from '@/public/images/logo-sec.svg';

import Container from '../Container/Container';
import style from './header.module.scss';
import Image from 'next/image';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

// { name: 'Yachts', link: '/yachts' },
// { name: 'Photshoots with car', link: '/photshoots' },
const HEADER_LINK = [
  { name: 'Car List', link: '/carlist' },
  { name: 'VIP Transfer', link: '/viptransfer' },
  { name: 'About Us', link: '/about' },
  { name: 'Contact Us', link: '/contact' },
];

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
            {HEADER_LINK.map((nav, index) => {
              return (
                <li key={index}>
                  <Link href={nav.link}>{nav.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <BurgerMenu className={style.burger} list={HEADER_LINK} />
      </Container>
    </header>
  );
};

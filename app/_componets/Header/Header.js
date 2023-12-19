import Link from 'next/link';
import Image from 'next/image';

import BurgerMenu from '@/app/_componets/BurgerMenu/BurgerMenu';
import Container from '@/app/_componets/Container/Container';

import Logo from '@/public/images/logo.svg';
import LogoSec from '@/public/images/logo-sec.svg';
import style from './header.module.scss';
import { HEADER_LINK } from '@/lib/link';

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

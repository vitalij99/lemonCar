import Link from "next/link";

import Logo from "@/public/images/logo.svg";
import LogoSec from "@/public/images/logo-sec.svg";

import Container from "../Container/Container";
import style from "./header.module.scss";

export const Header = () => {
    return (
        <header>
            <div className={style.header_section}>
                <Container>
                    <div className={style.wrapper}>
                        <Link href="/">
                            <div className={style.header_wrapp}>
                                <Logo />
                                <LogoSec />
                            </div>
                        </Link>
                        <div className={style.navigation}>
                            <Link href="/carlist">Car List</Link>
                            <Link href="/viptransfer">VIP Transfer</Link>
                            <Link href="/yachts">Yachts</Link>
                            <Link href="/photshoots">Photshoots with car</Link>
                            <Link href="/about">About Us</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    );
};

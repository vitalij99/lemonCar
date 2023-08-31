import Link from "next/link";
import Contacts from "../Contacts/Contacts";
import Container from "../Container/Container";
import style from "./hero.module.scss";

const Hero = () => {
    return (
        <div>
            <section className={style.section}>
                <Container>
                    <h1 className={style.title}>
                        WITH DELIVERY TO ANY LOCATION
                    </h1>
                    <h1 className={style.title_sec}>Rent a car in Dubai</h1>
                    <Contacts className={style.contacts} />
                    <Link className={style.link} href="/carlist">
                        <span>Rent a car</span>
                    </Link>
                </Container>
            </section>
        </div>
    );
};

export default Hero;

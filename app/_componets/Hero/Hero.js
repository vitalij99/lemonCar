import Container from "../Container/Container";
import style from "./hero.module.scss";

const Hero = ({ font }) => {
    return (
        <div className={font}>
            <section className={style.section}>
                <Container>
                    <h1 className={style.title}>
                        WITH DELIVERY TO ANY LOCATION
                    </h1>
                    <h1 className={style.title}>Rent a car in Dubai</h1>
                </Container>
            </section>
        </div>
    );
};

export default Hero;

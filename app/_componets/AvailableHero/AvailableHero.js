import Container from "../Container/Container";
import LinkArrow from "../LinkArrow/LinkArrow";
import style from "./AvailableHero.module.scss";

const AvailableHero = () => {
    return (
        <div className={style.wrapp}>
            <Container>
                <h3 className={style.title}>AVAILABLE</h3>
                <h2 className={style.info}>40+ luxury cars</h2>
                <LinkArrow className={style.link} href="/carlist" big blank>
                    Car List
                </LinkArrow>
            </Container>
        </div>
    );
};

export default AvailableHero;

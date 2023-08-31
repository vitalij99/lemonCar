import Container from "../Container/Container";
import style from "./AvailableHero.module.scss";

const AvailableHero = () => {
    return (
        <Container>
            <div className={style.wrapp}>
                <h3>AVAILABLE</h3>
                <h2>40+ luxury cars</h2>
            </div>
        </Container>
    );
};

export default AvailableHero;

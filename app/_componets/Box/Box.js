import Container from "../Container/Container";
import style from "./box.module.scss";

const Box = ({ className }) => {
    return (
        <section>
            <Container>
                <div className={className ? className : style.wrapp}></div>
            </Container>
        </section>
    );
};

export default Box;

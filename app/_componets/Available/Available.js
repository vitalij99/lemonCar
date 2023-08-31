import style from "./Available.module.scss";
import AvailableList from "../AvailableList/AvailableList";
import AvailableHero from "../AvailableHero/AvailableHero";

const Available = () => {
    return (
        <section className={style.section}>
            <AvailableList />
            <AvailableHero />
        </section>
    );
};

export default Available;

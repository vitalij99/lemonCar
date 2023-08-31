import style from "./stepCard.module.scss";

const StepCard = ({ number, title, children }) => {
    return (
        <div className={style.wrapp}>
            {title && <h3 className={style.number}>{number}</h3>}
            <div>
                {title && <h3 className={style.title}>{title}</h3>}
                {children && <p className={style.par}>{children}</p>}
            </div>
        </div>
    );
};

export default StepCard;

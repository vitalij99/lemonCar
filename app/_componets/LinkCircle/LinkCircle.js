import Link from "next/link";
import style from "./linkCircle.module.scss";

const LinkCircle = ({ href = "/carlist", children, big }) => {
    return (
        <Link className={style.link} href={href}>
            <span>{children}</span>
        </Link>
    );
};

export default LinkCircle;

import Link from "next/link";
import style from "./LinkArrow.module.scss";

const LinkArrow = ({ href, children }) => {
    return (
        <div className={style.item}>
            <Link
                className={style.link}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
            >
                {children}
            </Link>
        </div>
    );
};

export default LinkArrow;

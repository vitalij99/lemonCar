import Link from "next/link";
import style from "./linkCircle.module.scss";

const LinkCircle = ({ href = "/carlist", children, width = "100px" }) => {
    return (
        <Link
            className={style.link}
            style={{
                width: width,
                height: width,
            }}
            href={href}
        >
            <span>{children}</span>
        </Link>
    );
};

export default LinkCircle;

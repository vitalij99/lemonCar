import Image from "next/image";
import Link from "next/link";

import style from "./AvailabkeCard.module.scss";
import arrow from "@/public/images/mdi_arrow-r.svg";

const AvailabkeCard = ({ brand }) => {
    const { id, carBrand, number, logo } = brand;
    return (
        <li className={style.wrapp}>
            <Image
                className={style.logo}
                src={logo}
                width={138}
                height={49}
                alt="car brand"
            />
            <Link href={`/carlist/${id}`}>
                <Image className={style.arrow} src={arrow} alt="link" />
            </Link>
            <h3 className={style.name}>
                {carBrand} <span>{number} cars</span>
            </h3>
        </li>
    );
};

export default AvailabkeCard;

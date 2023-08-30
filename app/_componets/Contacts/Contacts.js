import style from "./contacts.module.scss";

const Contacts = ({ className }) => {
    return (
        <address className={className}>
            <nav>
                <ul>
                    <li className={style.item}>
                        <a
                            className={style.link}
                            href="https://web.telegram.org/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Telegram
                        </a>
                    </li>
                    <li className={style.item}>
                        <a
                            className={style.link}
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Instagram
                        </a>
                    </li>
                    <li className={style.item}>
                        <a
                            className={style.link}
                            href="https://www.whatsapp.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            WhatsApp
                        </a>
                    </li>
                    <li className={style.item}>
                        <a className={style.link} href="tel:123-456-7890">
                            +123-456-7890
                        </a>
                    </li>
                </ul>
            </nav>
        </address>
    );
};

export default Contacts;

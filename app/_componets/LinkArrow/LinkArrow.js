import Link from 'next/link';
import style from './LinkArrow.module.scss';

const LinkArrow = ({ href = '/', children, className, big, blank }) => {
  return (
    <div className={style.item}>
      <Link
        className={big ? style.big : style.link}
        href={href}
        target={blank ? '_blank' : '_self'}
        rel={blank ? 'noreferrer noopener' : 'false'}
      >
        <span className={className}>{children}</span>
      </Link>
    </div>
  );
};

export default LinkArrow;

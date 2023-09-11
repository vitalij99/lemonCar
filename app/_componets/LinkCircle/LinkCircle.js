import Link from 'next/link';
import style from './linkCircle.module.scss';

const LinkCircle = ({
  href = '/carlist',
  children = 'Rent a car',
  width = '100px',
  className,
}) => {
  return (
    <Link
      className={className ? `${style.link} ${className}` : style.link}
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

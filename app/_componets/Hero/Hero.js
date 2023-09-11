import Contacts from '../Contacts/Contacts';
import Container from '../Container/Container';
import style from './hero.module.scss';
import LinkCircle from '../LinkCircle/LinkCircle';

const Hero = () => {
  return (
    <section className={style.section}>
      <Container>
        <h1 className={style.title}>WITH DELIVERY TO ANY LOCATION</h1>
        <h1 className={style.title_sec}>Rent a car in Dubai</h1>
        <Contacts className={style.contacts} />
        <div className={style.wrapp}>
          <LinkCircle href="/carlist">Rent a car</LinkCircle>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

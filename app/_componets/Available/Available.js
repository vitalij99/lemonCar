import style from './Available.module.scss';
import AvailableList from '../AvailableList/AvailableList';
import AvailableHero from '../AvailableHero/AvailableHero';
import Container from '../Container/Container';

const Available = () => {
  return (
    <section>
      <Container>
        <div className={style.section}>
          <AvailableList />
          <AvailableHero />
        </div>
      </Container>
    </section>
  );
};

export default Available;

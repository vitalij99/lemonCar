import { getCarList } from '@/lib/carList';
import Carlist from '../_componets/Carlist/Carlist';
import Container from '../_componets/Container/Container';
import style from '../styles/carlist.module.scss';

export async function getStaticProps() {
  const repo = await getCarList();

  return { props: { repo } };
}

const page = ({ repo }) => {
  return (
    <section className={style.section}>
      <Container>
        <h1 className={style.title}>Rent a car in Dubai</h1>
        <Carlist list={repo} />
      </Container>
    </section>
  );
};

export default page;

import style from './admin.module.scss';

import Container from '../_componets/Container/Container';

const page = () => {
  return (
    <div>
      <section className={style.section}>
        <Container></Container>
      </section>
    </div>
  );
};
export default page;

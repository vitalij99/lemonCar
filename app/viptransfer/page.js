import Container from '@/app/_componets/Container/Container';

import style from '@/app/styles/carlist.module.scss';
import VipTransfer from '@/app/_componets/VipTransfer/VipTransfer';

const page = () => {
  return (
    <section className={style.section}>
      <Container>
        <h1 className={style.title}>Vip transfer</h1>
        <VipTransfer />
      </Container>
    </section>
  );
};

export default page;

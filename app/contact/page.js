import style from '@/app/styles/carpage.module.scss';
import Contact from '@/app/_componets/Contact/Contact';
import Contacts from '@/app/_componets/Contacts/Contacts';
import Container from '../_componets/Container/Container';
import BreadcrumbsCustl from '../_componets/Breadcrumbs/Breadcrumbs';

const page = () => {
  return (
    <section className={style.section}>
      <Container>
        <BreadcrumbsCustl />
        <Contact />
        <Contacts />
      </Container>
    </section>
  );
};

export default page;

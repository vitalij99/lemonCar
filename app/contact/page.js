import style from '@/app/styles/carpage.module.scss';
import Contact from '@/app/_componets/Contact/Contact';
import Contacts from '@/app/_componets/Contacts/Contacts';

const page = () => {
  return (
    <section className={style.section}>
      <Contact />
      <Contacts />
    </section>
  );
};

export default page;

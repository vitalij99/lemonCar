import Container from '@/app/_componets/Container/Container';
import ListText from '@/app/_componets/ListText/ListText';
import style from './advantage.module.scss';
const CHOOSE_LIST = [
  {
    title: 'FREECAR DELIVERY',
    text: ' We will deliver the car directly to your location in Dubai',
  },
  {
    title: 'EXPERIENCEDDRIVERS',
    text: `Don’t have a driver? Don’t worry, we have many experienced drivers for
          you.`,
  },
  {
    title: 'TECHNICAL SUPPORT',
    text: 'Have a question? Contact support when you have a problem.',
  },
];
const Advantage = ({ title, titleSec }) => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapp}>
          <div>
            <h3 className={style.title}>{title ? title : 'WHY CHOOSE US'}</h3>
            <h2 className={`${style.title_sec} ${style.title_adv}`}>
              {titleSec
                ? titleSec
                : `We offer the best experience
              with our rental deals offer the best`}
            </h2>
          </div>
          <ListText list={CHOOSE_LIST} />
        </div>
      </Container>
    </section>
  );
};

export default Advantage;

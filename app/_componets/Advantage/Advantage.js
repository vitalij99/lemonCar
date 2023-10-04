import style from './advantage.module.scss';
import Container from '../Container/Container';

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
          <ul>
            <li>
              <h3 className={style.advantage_title}>FREECAR DELIVERY</h3>
              <p className={style.advantage_para}>
                We will deliver the car directly to your location in Dubai
              </p>
            </li>
            <li>
              <h3 className={style.advantage_title}>EXPERIENCEDDRIVERS</h3>
              <p className={style.advantage_para}>
                Don’t have a driver? Don’t worry, we have many experienced
                drivers for you.
              </p>
            </li>
            <li>
              <h3 className={style.advantage_title}>TECHNICAL SUPPORT</h3>
              <p className={style.advantage_para}>
                Have a question? Contact support when you have a problem.
              </p>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Advantage;

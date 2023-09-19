import Container from '../Container/Container';
import styleTitle from '../Advantage/advantage.module.scss';
import style from './steps.module.scss';
import StepCard from '../StepCard/StepCard';

import LinkCircle from '../LinkCircle/LinkCircle';

const Steps = () => {
  return (
    <section className={style.section}>
      <Container>
        <h3 className={styleTitle.title}>HOW IT WORK</h3>
        <h2 className={style.title}>Rent a car just with 3 steps</h2>
        <div className={style.wrap}>
          <StepCard title={'Choose a car'} number={'01'}>
            Browse our exclusive fleet. Explore a wide selection of premium
            vehicles including luxury sedans, sports cars, SUVs and
            convertibles.
          </StepCard>
          <StepCard title={'Pick-up date'} number={'02'}>
            Submit your rental request. Once you have selected a vehicle, please
            complete our simple online request form. Our team will contact you
            promptly to confirm the details.
          </StepCard>
          <StepCard title={'Get your car'} number={'03'}>
            Choose a convenient pickup option. You can pick up the car from the
            showroom or we will deliver it to you.Choose a convenient pickup
            option. You can pick up the car from the showroom or we will deliver
            it to you.
          </StepCard>
          <div className={style.link_wrap}>
            <LinkCircle className={style.link} width={178} href="/carlist">
              <p>Rent a car</p>
            </LinkCircle>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Steps;

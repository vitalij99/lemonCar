import Container from '../Container/Container';
import Dropdown from '../Dropdown/Dropdown';
import styleTitle from '../Advantage/advantage.module.scss';
import style from './faq.module.scss';

const FAQDROP = [
  {
    title: 'What forms of payment do you accept?',
    page: 'We accept a variety of payment methods to provide maximum comfort for our customers. We currently accept cash payments, Visa, MasterCard and American Express credit cards, as well as electronic transfers through popular payment systems such as PayPal and Apple Pay. Our goal is to provide convenience and reliability in all payment transactions so that you can enjoy our services without any worries.',
  },
  {
    title: 'When will the deposit for the vehicle be refunded?',
    page: 'The refund of the car deposit is determined by the agreement you conclude with our company at the time of renting. Usually, the deposit is refunded after you return the car in the appropriate condition and in accordance with the terms of the agreement. This process may take several business days to process, but we always try to do it as soon as possible so that you can get your deposit back. Detailed deposit refund terms may vary, so we recommend checking your agreement or contacting our customer service department for exact information.',
  },
  {
    title: 'What is the daily mileage limit of rented cars?',
    page: 'Our daily mileage limit for rented cars typically varies depending on the type of vehicle you rented and the terms of your rental agreement. However, a common mileage limit is around 100 to 150 miles per day. This limit is in place to ensure the proper maintenance and condition of our rental vehicles. If you exceed the daily mileage limit, additional charges per mile/kilometer driven may apply. Please refer to your rental agreement or contact our customer service team for the specific mileage limit associated with your rental. We want to ensure that you have a clear understanding of the terms to make your rental experience as smooth as possible.',
  },
  {
    title: 'Where can I drive a rented car?',
    page: ' Most rental cars can be used for local driving within the city or region where you rented the vehicle. This typically includes driving within the same or province.',
  },
  {
    title: 'Is it possible to deliver a car to a specific location in Dubai?',
    page: "Yes, it is possible to arrange for car delivery to a specific location in Dubai through our rental service. We offer the convenience of delivering your rented car to your desired location within Dubai, whether it's an airport, hotel, residence, or any other specified address. This service is designed to make your car rental experience as seamless as possible. Simply let us know your delivery location and the vehicle you require, and we'll work to accommodate your request, ensuring you have a hassle-free start to your journey in Dubai.",
  },
];

const Faq = () => {
  return (
    <section>
      <Container>
        <h2 className={styleTitle.title_sec}>FAQ</h2>
        <ul>
          {FAQDROP.map((faq, i) => {
            return (
              <li key={i}>
                <Dropdown Dropdown title={faq.title}>
                  <p className={style.page}> {faq.page}</p>
                </Dropdown>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Faq;

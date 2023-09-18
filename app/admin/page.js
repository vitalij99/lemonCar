import style from './admin.module.scss';

import Container from '../_componets/Container/Container';
import Form from './form/Form';

const page = () => {
  return (
    <div>
      <section className={style.section}>
        <Container>
          <Form />
        </Container>
      </section>
    </div>
  );
};
export default page;

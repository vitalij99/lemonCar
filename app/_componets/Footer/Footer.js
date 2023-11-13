import Contacts from '../Contacts/Contacts';
import Container from '../Container/Container';
import Dropdown from '../Dropdown/Dropdown';
import LinkCircle from '../LinkCircle/LinkCircle';
import style from './footer.module.scss';

const CUSTOMERS = [
  { href: '/carlist', name: 'Car List' },
  { href: '/terms', name: 'Terms' },
  { href: '/about', name: 'About Us' },
  { href: '/contacts', name: 'Contacts' },
];
const CARLIST = [
  { href: '/carlist/popular', name: 'Most popular' },
  { href: '/carlist/suv', name: 'SUV' },
  { href: '/carlist/cabriolet', name: 'Cabriolet' },
  { href: '/carlist/sedan', name: 'Sedan' },
];

const Footer = () => {
  // add image + pc ver.
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapp}>
          <Dropdown title="For Customers">
            <Contacts title="For Customers" list={CUSTOMERS} blank={false} />
          </Dropdown>
          <Dropdown title="Car List">
            <Contacts title="Car List" list={CARLIST} blank={false} />
          </Dropdown>
          <Dropdown title="Contacts">
            <Contacts title="Car List" />
          </Dropdown>
        </div>
        <div className={style.wrapp_des}>
          <Contacts
            className={style.list}
            title="For Customers"
            list={CUSTOMERS}
            blank={false}
          />
          <Contacts
            className={style.list}
            title="Car List"
            list={CARLIST}
            blank={false}
          />
          <Contacts className={style.list} title="Contacts" />
          <LinkCircle width="178px">
            <span className={style.link}>Rent a car</span>
          </LinkCircle>
        </div>
        <LinkCircle className={style.circle} width="178px">
          <span className={style.link}>Rent a car</span>
        </LinkCircle>
      </Container>
    </footer>
  );
};

export default Footer;

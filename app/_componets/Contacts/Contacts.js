import LinkArrow from '../LinkArrow/LinkArrow';
const CONTACT = [
  { href: 'https://web.telegram.org/', name: 'Telegram' },
  { href: 'https://www.instagram.com/', name: 'Instagram' },
  { href: 'https://www.whatsapp.com/', name: 'WhatsApp' },
  { href: 'tel:123-456-7890', name: ' +123-456-7890' },
];
const Contacts = ({ className, list = CONTACT, blank = true }) => {
  return (
    <address className={className}>
      <nav>
        <ul>
          {list.map((link, i) => {
            return (
              <li key={i}>
                <LinkArrow blank={blank} href={link.href}>
                  {link.name}
                </LinkArrow>
              </li>
            );
          })}
        </ul>
      </nav>
    </address>
  );
};

export default Contacts;

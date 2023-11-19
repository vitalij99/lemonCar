import style from './listText.module.scss';

const ListText = ({ list }) => {
  return (
    <ul>
      {list.map((elem, index) => (
        <li key={index}>
          <h3 className={style.title}>{elem.title}</h3>
          <p className={style.para}>{elem.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default ListText;

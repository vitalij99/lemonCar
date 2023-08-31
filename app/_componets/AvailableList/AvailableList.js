import AvailabkeCard from "../AvailabkeCard/AvailabkeCard";
import style from "./availableList.module.scss";
const list = [
    {
        id: "asdasd",
        carBrand: "Rolls-Royce",
        logo: "https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg",
        number: 5,
    },
    {
        id: "asdaasdsd",
        carBrand: "Rolls-Royce",
        logo: "https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg",
        number: 5,
    },
    {
        id: "asdaasdsd",
        carBrand: "Rolls-Royce",
        logo: "https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg",
        number: 3,
    },
    {
        id: "asфasdвdaasdsd",
        carBrand: "Rolls-Royce",
        logo: "https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg",
        number: 3,
    },
    {
        id: "asdaasdsddsadw",
        carBrand: "Rolls-Royce",
        logo: "https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg",
        number: 3,
    },
    {
        id: "asdqweaasdsd",
        carBrand: "Rolls-Royce",
        logo: "https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg",
        number: 3,
    },
    {
        id: "asdaaqweqwesdsd",
        carBrand: "Rolls-Royce",
        logo: "https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg",
        number: 3,
    },
    {
        id: "asdaaqweqwesdsd",
        carBrand: "Rolls-Royce",
        logo: "https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg",
        number: 3,
    },
];

const AvailableList = () => {
    return (
        <ul className={style.list}>
            {list.map((brand) => {
                return <AvailabkeCard key={brand.id} brand={brand} />;
            })}
        </ul>
    );
};

export default AvailableList;

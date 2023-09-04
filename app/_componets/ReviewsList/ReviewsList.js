import Image from 'next/image';
import styleList from '../AvailableList/availableList.module.scss';
const reviewsUser = [
  {
    id: 'ashdasd',
    foto: 'https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg',
  },
  {
    id: 'asvdasd',
    foto: 'https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg',
  },
  {
    id: 'aasdsdasd',
    foto: 'https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg',
  },
  {
    id: 'asdasasdd',
    foto: 'https://res.cloudinary.com/dizrnyvqx/image/upload/v1693403682/cld-sample-5.jpg',
  },
];

const ReviewsList = () => {
  return (
    <ul className={styleList.list}>
      {reviewsUser.map(review => {
        return (
          <li key={review.id}>
            <Image src={review.foto} width={345} height={548} alt="reviewr" />
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;

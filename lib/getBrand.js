import { getCarList } from './carList';
import { db } from './db';

function countCarsByBrand(cars, brands) {
  for (const brand of brands) {
    const foundCars = cars.filter(car => car.carBrand === brand.id);
    brand.number = foundCars.length;
  }
  return brands;
}

export const getBrand = async () => {
  try {
    const carList = await getCarList();
    const brandList = await db.brand.findMany();

    const result = countCarsByBrand(carList, brandList);

    return result;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

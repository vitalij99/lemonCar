import { db } from './db';

export const getCarList = async ({ category, carName } = '') => {
  try {
    return await db.carList.findMany({
      where: {
        carBrand: category,
        name: carName,
      },
    });
  } catch (error) {
    return null;
  }
};
export const getCarByID = async carId => {
  try {
    return await db.carList.findUnique({ where: { id: carId } });
  } catch (error) {
    return null;
  }
};

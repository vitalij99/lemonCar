import { db } from './db';

export const getCarList = async ({ category, carName, pagenation } = '') => {
  try {
    return await db.carList.findMany({
      take: pagenation,
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

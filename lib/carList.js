import { db } from './db';

export const getCarList = async category => {
  console.log(category);
  try {
    return await db.carList.findMany({
      where: {
        carBrand: category,
      },
    });
  } catch (error) {
    return null;
  }
};

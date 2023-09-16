import { db } from './db';

export const getCarList = async () => {
  try {
    return await db.carList.findMany();
  } catch (error) {
    return [];
  }
};

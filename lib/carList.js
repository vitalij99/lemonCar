import { db } from './db';

export const getCarList = async () => {
  return await db.carList.findMany();
};

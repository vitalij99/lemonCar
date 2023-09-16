import { db } from './db';

export const getCarList = async () => {
  const result = await db.carList.findMany();

  return result;
};

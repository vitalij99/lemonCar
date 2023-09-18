import { db } from './db';

export const getLogin = async () => {
  try {
    return await db.carList.findMany();
  } catch (error) {
    return null;
  }
};

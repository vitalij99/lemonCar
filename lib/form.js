import { db } from './db';

export const getLogin = async (date) => {
  const {}
  try {
    return await db.carList.findMany();
  } catch (error) {
    return null;
  }
};

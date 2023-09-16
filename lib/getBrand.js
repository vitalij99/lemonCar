import { db } from './db';

export const getBrand = async () => {
  try {
    return await db.brand.findMany();
  } catch (error) {
    return null;
  }
};

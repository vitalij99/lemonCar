import { db } from './db';

export const getVipTransfer = async () => {
  try {
    const result = await db.transfer.findMany();

    return result;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

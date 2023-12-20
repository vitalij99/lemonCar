import { db } from './db';

export const authUser = async req => {
  const token = req.headers.get('authorization');
  if (!token) return undefined;
  const user = await db.admin.findFirst({ where: { accessToken: token } });

  return user;
};

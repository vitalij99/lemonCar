import { db } from './db';

export const authUser = async request => {
  const cookie = request.cookies.get('token');
  const token = cookie ? cookie.value : undefined;

  if (!token) return undefined;
  const user = await db.admin.findFirst({ where: { accessToken: token } });

  return user;
};

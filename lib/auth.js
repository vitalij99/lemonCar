import { db } from './db';

// const { value: token } = request.cookies.get('token');
export const authUser = async request => {
  const { value: token } = request.cookies.get('token');

  if (!token) return undefined;
  const user = await db.admin.findFirst({ where: { accessToken: token } });

  return user;
};

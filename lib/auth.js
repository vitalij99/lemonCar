import { db } from './db';
import bcrypt from 'bcrypt';

// add reloadToken try add error and hech password

export const authUser = async request => {
  const cookie = request.cookies.get('token');
  const token = cookie ? cookie.value : undefined;

  if (!token) return undefined;
  const user = await db.admin.findFirst({ where: { accessToken: token } });

  return user;
};
export async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(enteredPassword, hashedPassword) {
  return await bcrypt.compare(enteredPassword, hashedPassword);
}

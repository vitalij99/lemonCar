import { db } from './db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const authUser = async request => {
  try {
    const cookieToken = request.cookies.get('token');

    const token = cookieToken ? cookieToken.value : undefined;

    if (!token) throw 'wrong authorization';

    const user = await db.admin.findFirst({ where: { accessToken: token } });

    jwt.verify(token, process.env.TokenSecret);

    if (user) {
      return user;
    } else {
      throw 'wrong authorization';
    }
  } catch (error) {
    throw 'wrong authorization';
  }
};

export async function hashPassword(password) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function comparePasswords(enteredPassword, hashedPassword) {
  return await bcrypt.compare(enteredPassword, hashedPassword);
}

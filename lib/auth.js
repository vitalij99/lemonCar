import { db } from './db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const authUser = async request => {
  try {
    const cookieToken = request.cookies.get('token');

    const token = cookieToken ? cookieToken.value : undefined;

    if (!token) throw 'wrong authorization';
    const decode = jwt.verify(token, process.env.TokenSecret);

    const user = await db.admin.findUnique({ where: { id: decode.user } });

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

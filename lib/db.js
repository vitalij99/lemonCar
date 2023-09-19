const { PrismaClient } = require('@prisma/client');

const global = {
  prisma: PrismaClient | undefined,
};

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = db;
}

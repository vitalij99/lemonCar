const { PrismaClient } = require('@prisma/client');

const global = {
  prisma: PrismaClient | undefined,
};

export const db = global.prisma || new PrismaClient();

if (process.env.MONGODB_URI !== 'production') {
  global.prisma = db;
}

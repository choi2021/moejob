import { PrismaClient } from '@prisma/client';
declare global {
  var _mongoClientPromise: Promise | undefined;
  var prisma: PrismaClient | undefined;
}

export {};

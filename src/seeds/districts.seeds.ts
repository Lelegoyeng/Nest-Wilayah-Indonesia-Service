import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function districts() {
  console.log('🔃 Starting Seeds Districts.seeds.ts...');
  await prisma.districts.deleteMany();
  await prisma.$executeRaw`ALTER TABLE Districts AUTO_INCREMENT = 1`;

  // 7014 data
  const source = [];

  await prisma.districts.createMany({
    data: source
  });
}

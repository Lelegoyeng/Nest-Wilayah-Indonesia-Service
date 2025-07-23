import { PrismaClient } from '@prisma/client';
import { provinces } from './provinces.seeds';
import { cities } from './cities.seeds';
import { districts } from './districts.seeds';

async function runSeeds() {
  await provinces();
  await cities();
  await districts();
}

runSeeds()
  .catch((error) => {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  })
  .finally(async () => {
    const prisma = new PrismaClient();
    await prisma.$disconnect();
    console.log('✅ Database seeded successfully');
  });

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function provinces() {
  console.log('🔃 Starting Seeds Provinces.seeds.ts...');
  await prisma.provinces.deleteMany();
  await prisma.$executeRaw`ALTER TABLE Provinces AUTO_INCREMENT = 1`;

  // 38 provinces
  const source = [
    { name: 'Aceh' },
    { name: 'Bali' },
    { name: 'Banten' },
    { name: 'Bengkulu' },
    { name: 'Daerah Istimewa Yogyakarta' },
    { name: 'DKI Jakarta' },
    { name: 'Gorontalo' },
    { name: 'Jambi' },
    { name: 'Jawa Barat' },
    { name: 'Jawa Tengah' },
    { name: 'Jawa Timur' },
    { name: 'Kalimantan Barat' },
    { name: 'Kalimantan Selatan' },
    { name: 'Kalimantan Tengah' },
    { name: 'Kalimantan Timur' },
    { name: 'Kalimantan Utara' },
    { name: 'Kepulauan Bangka Belitung' },
    { name: 'Kepulauan Riau' },
    { name: 'Lampung' },
    { name: 'Maluku' },
    { name: 'Maluku Utara' },
    { name: 'Nusa Tenggara Barat' },
    { name: 'Nusa Tenggara Timur' },
    { name: 'Papua' },
    { name: 'Papua Barat' },
    { name: 'Papua Barat Daya' },
    { name: 'Papua Pegunungan' },
    { name: 'Papua Selatan' },
    { name: 'Papua Tengah' },
    { name: 'Riau' },
    { name: 'Sulawesi Barat' },
    { name: 'Sulawesi Selatan' },
    { name: 'Sulawesi Tengah' },
    { name: 'Sulawesi Tenggara' },
    { name: 'Sulawesi Utara' },
    { name: 'Sumatera Barat' },
    { name: 'Sumatera Selatan' },
    { name: 'Sumatera Utara' }
  ];

  await prisma.provinces.createMany({
    data: source
  });
}

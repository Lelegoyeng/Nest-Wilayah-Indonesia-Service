import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function provinces() {
  console.log('🔃 Starting Seeds Provinces.seeds.ts...');
  await prisma.provinces.deleteMany();
  await prisma.$executeRaw`ALTER TABLE Provinces AUTO_INCREMENT = 1`;

  // 38 provinces
  const source = [
    { name: 'ACEH' },
    { name: 'SUMATERA UTARA' },
    { name: 'SUMATERA BARAT' },
    { name: 'RIAU' },
    { name: 'JAMBI' },
    { name: 'SUMATERA SELATAN' },
    { name: 'BENGKULU' },
    { name: 'LAMPUNG' },
    { name: 'KEPULAUAN BANGKA BELITUNG' },
    { name: 'KEPULAUAN RIAU' },
    { name: 'DKI JAKARTA' },
    { name: 'JAWA BARAT' },
    { name: 'JAWA TENGAH' },
    { name: 'DI YOGYAKARTA' },
    { name: 'JAWA TIMUR' },
    { name: 'BANTEN' },
    { name: 'BALI' },
    { name: 'NUSA TENGGARA BARAT (NTB)' },
    { name: 'NUSA TENGGARA TIMUR (NTT)' },
    { name: 'KALIMANTAN BARAT' },
    { name: 'KALIMANTAN TENGAH' },
    { name: 'KALIMANTAN SELATAN' },
    { name: 'KALIMANTAN TIMUR' },
    { name: 'KALIMANTAN UTARA' },
    { name: 'SULAWESI UTARA' },
    { name: 'SULAWESI TENGAH' },
    { name: 'SULAWESI SELATAN' },
    { name: 'SULAWESI TENGGARA' },
    { name: 'GORONTALO' },
    { name: 'SULAWESI BARAT' },
    { name: 'MALUKU' },
    { name: 'MALUKU UTARA' },
    { name: 'PAPUA' },
    { name: 'PAPUA BARAT' },
    { name: 'PAPUA TENGAH' },
    { name: 'PAPUA PEGUNUNGAN' },
    { name: 'PAPUA SELATAN' },
    { name: 'PAPUA BARAT DAYA' }
  ];

  await prisma.provinces.createMany({
    data: source
  });
}

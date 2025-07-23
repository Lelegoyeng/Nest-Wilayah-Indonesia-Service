import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function provinces() {
  console.log('🔃 Starting Seeds Provinces.seeds.ts...');
  await prisma.provinces.deleteMany();
  await prisma.$executeRaw`ALTER TABLE Provinces AUTO_INCREMENT = 1`;

  const source = [
    { name: 'NUSA TENGGARA BARAT (NTB)' },
    { name: 'NUSA TENGGARA BARAT' },
    { name: 'MALUKU' },
    { name: 'KALIMANTAN SELATAN' },
    { name: 'KALIMANTAN TENGAH' },
    { name: 'JAWA BARAT' },
    { name: 'BENGKULU' },
    { name: 'KALIMANTAN TIMUR' },
    { name: 'KEPULAUAN RIAU' },
    { name: 'NANGGROE ACEH DARUSSALAM (NAD)' },
    { name: 'DKI JAKARTA' },
    { name: 'BANTEN' },
    { name: 'JAWA TENGAH' },
    { name: 'JAMBI' },
    { name: 'PAPUA' },
    { name: 'BALI' },
    { name: 'SUMATERA UTARA' },
    { name: 'GORONTALO' },
    { name: 'JAWA TIMUR' },
    { name: 'DI YOGYAKARTA' },
    { name: 'SULAWESI TENGGARA' },
    { name: 'NUSA TENGGARA TIMUR (NTT)' },
    { name: 'SULAWESI UTARA' },
    { name: 'SUMATERA BARAT' },
    { name: 'BANGKA BELITUNG' },
    { name: 'RIAU' },
    { name: 'SUMATERA SELATAN' },
    { name: 'SULAWESI TENGAH' },
    { name: 'KALIMANTAN BARAT' },
    { name: 'PAPUA BARAT' },
    { name: 'LAMPUNG' },
    { name: 'KALIMANTAN UTARA' },
    { name: 'MALUKU UTARA' },
    { name: 'SULAWESI SELATAN' },
    { name: 'SULAWESI BARAT' }
  ];

  await prisma.provinces.createMany({
    data: source
  });
}

import { PrismaClient } from '@prisma/client';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const prisma = new PrismaClient();

const seed = async () => {
    // add path for seed files
    const seedFilesPath = join(__dirname);

    const seedFiles = readdirSync(seedFilesPath).filter((file: string) =>
        file.endsWith('.seed.ts'),
    );

    for (const seedFile of seedFiles) {
        const seedFilePath = join(seedFilesPath, seedFile);
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { default: seedFunction } = require(seedFilePath);
        await seedFunction(prisma);
    }

    console.log('Seeding completed successfully');
};

seed()
    .catch((error) => {
        console.error('Seeding error:', error);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

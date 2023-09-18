import { Module } from '@nestjs/common';
import { IPromptsRepository } from 'src/application/interfaces/prompts-repository.interface';
import { PrismaPromptsRepository } from './prisma/repositories/prisma-prompts.repository';
import { PrismaService } from './prisma/services/prisma.service';

@Module({
    providers: [
        PrismaService,
        {
            provide: IPromptsRepository,
            useClass: PrismaPromptsRepository,
        },
    ],
    exports: [IPromptsRepository],
})
export class DatabasesModule {}

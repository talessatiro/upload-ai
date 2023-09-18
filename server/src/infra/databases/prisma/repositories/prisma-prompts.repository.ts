import { Injectable } from '@nestjs/common';
import { PromptEntity } from 'src/application/entities/prompt.entity';
import { IPromptsRepository } from 'src/application/interfaces/prompts-repository.interface';
import { PrismaService } from '../services/prisma.service';
import { PrismaPromptViewModel } from '../view-models/prisma-prompt.view-model';

@Injectable()
export class PrismaPromptsRepository implements IPromptsRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findMany(): Promise<PromptEntity[]> {
        const prompts = await this.prisma.prompt.findMany();

        return prompts.map(PrismaPromptViewModel.toDomain);
    }
}

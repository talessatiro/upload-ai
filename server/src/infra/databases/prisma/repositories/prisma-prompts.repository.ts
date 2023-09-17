import { Injectable } from '@nestjs/common';
import { PromptEntity } from 'src/application/entities/prompt.entity';
import { IPromptsRepository } from 'src/application/interfaces/prompts-repository.interface';

@Injectable()
export class PrismaPromptsRepository implements IPromptsRepository {
    findMany(): Promise<PromptEntity[]> {
        throw new Error('Method not implemented.');
    }
}

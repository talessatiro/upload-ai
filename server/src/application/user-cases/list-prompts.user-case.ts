import { Inject, Injectable } from '@nestjs/common';
import { PromptEntity } from '../entities/prompt.entity';
import { IPromptsRepository } from '../interfaces/prompts-repository.interface';

interface ListPromptsResponse {
    prompts: Array<PromptEntity>;
}

@Injectable()
export class ListPromptsUserCase {
    constructor(
        @Inject(IPromptsRepository)
        private readonly promptsRepository: IPromptsRepository,
    ) {}

    async execute(): Promise<ListPromptsResponse> {
        const prompts = await this.promptsRepository.findMany();

        return {
            prompts,
        };
    }
}

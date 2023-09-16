import { PromptEntity } from '../entities/prompt.entity';
import { IPromptRepository } from '../interfaces/prompt-repository.interface';

interface ListPromptsResponse {
    prompts: Array<PromptEntity>;
}

export class ListPromptsUserCase {
    constructor(private readonly promptRepository: IPromptRepository) {}

    async execute(): Promise<ListPromptsResponse> {
        const prompts = await this.promptRepository.findMany();

        return {
            prompts,
        };
    }
}

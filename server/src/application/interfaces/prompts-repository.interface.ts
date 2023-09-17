import { PromptEntity } from '../entities/prompt.entity';

export interface IPromptsRepository {
    findMany(): Promise<Array<PromptEntity>>;
}

export const IPromptsRepository = Symbol('IPromptsRepository');

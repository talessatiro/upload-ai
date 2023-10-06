import { PromptEntity } from '../entities/prompt.entity';

export abstract class IPromptsRepository {
    abstract findMany(): Promise<Array<PromptEntity>>;
}

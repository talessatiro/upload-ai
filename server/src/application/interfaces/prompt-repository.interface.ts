import { PromptEntity } from '../entities/prompt.entity';

export interface IPromptRepository {
    findMany(): Promise<Array<PromptEntity>>;
}

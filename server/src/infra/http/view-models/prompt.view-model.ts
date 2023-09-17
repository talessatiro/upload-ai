import { PromptEntity } from 'src/application/entities/prompt.entity';

export class PromptViewModel {
    static toHTTP({ id, title, template, createdAt, updatedAt }: PromptEntity) {
        return {
            id,
            title,
            template,
            createdAt,
            updatedAt,
        };
    }
}

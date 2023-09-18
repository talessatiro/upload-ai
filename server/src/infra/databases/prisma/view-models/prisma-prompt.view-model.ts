import { Prompt as RawPrompt } from '@prisma/client';
import { PromptEntity } from 'src/application/entities/prompt.entity';

export class PrismaPromptViewModel {
    static toPrisma(entity: PromptEntity): RawPrompt {
        return {
            id: entity.id,
            title: entity.title,
            template: entity.template,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }

    static toDomain(raw: RawPrompt): PromptEntity {
        return new PromptEntity(
            {
                title: raw.title,
                template: raw.template,
            },
            {
                id: raw.id,
                createdAt: raw.createdAt,
                updatedAt: raw.updatedAt,
            },
        );
    }
}

import { Prompt as RawPrompt } from '@prisma/client';
import { PromptEntity } from 'src/application/entities/prompt.entity';

export class PrismaPromptViewModel {
    static toPrisma(
        entity: PromptEntity,
    ): Omit<RawPrompt, 'createdAt' | 'updatedAt'> {
        return {
            id: entity.id,
            title: entity.title,
            template: entity.template,
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

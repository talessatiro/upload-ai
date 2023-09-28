import { Audio as RawAudio } from '@prisma/client';
import { AudioEntity } from 'src/application/entities/audio.entity';

export class PrismaAudioViewModel {
    static toPrisma(
        entity: AudioEntity,
    ): Omit<RawAudio, 'createdAt' | 'updatedAt'> {
        return {
            id: entity.id,
            filename: entity.filename,
            size: entity.size,
            mimetype: entity.mimetype,
            path: entity.path,
        };
    }

    static toDomain(raw: RawAudio): AudioEntity {
        return new AudioEntity(
            {
                filename: raw.filename,
                size: raw.size,
                mimetype: raw.mimetype,
                path: raw.path,
            },
            {
                id: raw.id,
                createdAt: raw.createdAt,
                updatedAt: raw.updatedAt,
            },
        );
    }
}

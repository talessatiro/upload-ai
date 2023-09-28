import { AudioEntity } from 'src/application/entities/audio.entity';
import { IAudiosStorageRepository } from 'src/application/interfaces/audios-storage-repository.interface';
import { MinioService } from '../service/minio.service';
import { ConfigService } from '@nestjs/config';

export class MinioAudioRepository implements IAudiosStorageRepository {
    constructor(
        private readonly config: ConfigService,
        private readonly minio: MinioService,
    ) {}

    async upload(audio: AudioEntity & { buffer: Buffer }): Promise<string> {
        const storagePath = `${new Date().getTime()}/${audio.filename}`;

        await this.minio.client.putObject(
            this.config.get<string>('STORAGE_BUCKET_NAME', 'audios'),
            storagePath,
            audio.buffer,
        );

        return `http://${this.config.get<string>(
            'STORAGE_ENDPOINT',
            '127.0.0.1',
        )}:${this.config.get<number>('STORAGE_PORT', 9000)}/${storagePath}`;
    }
}

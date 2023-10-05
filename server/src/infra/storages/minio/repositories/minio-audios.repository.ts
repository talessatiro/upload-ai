import { AudioEntity } from 'src/application/entities/audio.entity';
import { IAudiosStorageRepository } from 'src/application/interfaces/audios-storage-repository.interface';
import { MinioService } from '../service/minio.service';
import { ConfigService } from '@nestjs/config';

export class MinioAudiosRepository implements IAudiosStorageRepository {
    constructor(
        private readonly config: ConfigService,
        private readonly minio: MinioService,
    ) {}

    async upload(audio: AudioEntity & { buffer: Buffer }): Promise<string> {
        const fileStoragePath = `${new Date().getTime()}/${audio.filename}`;

        await this.minio.client.putObject(
            this.config.get<string>('STORAGE_BUCKET_NAME', 'audios'),
            fileStoragePath,
            audio.buffer,
        );

        return this.buildFilePath(fileStoragePath);
    }

    private buildFilePath(fileStoragePath: string): string {
        const storageEndpoint = this.config.get<string>(
            'STORAGE_ENDPOINT',
            '127.0.0.1',
        );
        const storagePort = this.config.get<number>('STORAGE_PORT', 9000);
        const storageSSL = this.config.get<boolean>('STORAGE_SSL', false);

        return `${
            storageSSL ? 'https' : 'http'
        }://${storageEndpoint}:${storagePort}/${fileStoragePath}`;
    }
}

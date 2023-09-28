import { Module } from '@nestjs/common';
import { MinioService } from './minio/service/minio.service';

@Module({ providers: [MinioService] })
export class StoragesModule {}

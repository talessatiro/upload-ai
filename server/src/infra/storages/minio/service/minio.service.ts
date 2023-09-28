import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client as MinioClient } from 'minio';

@Injectable()
export class MinioService implements OnModuleInit {
    private _client: MinioClient;

    constructor(private readonly config: ConfigService) {}

    onModuleInit() {
        this._client = new MinioClient({
            endPoint: this.config.get<string>('STORAGE_ENDPOINT', '127.0.0.1'),
            port: this.config.get<number>('STORAGE_PORT', 9000),
            useSSL: false,
            accessKey: this.config.get<string>('STORAGE_USER', 'user'),
            secretKey: this.config.get<string>('STORAGE_PASSWORD', 'password'),
        });
    }

    get client(): MinioClient {
        return this._client;
    }
}

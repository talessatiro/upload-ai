import { AudioEntity } from '../entities/audio.entity';

export interface IAudiosStorageRepository {
    upload(audio: AudioEntity & { buffer: Buffer }): Promise<string>;
}

export const IAudiosStorage = Symbol('IAudiosStorageRepository');

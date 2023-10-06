import { AudioEntity } from '../entities/audio.entity';

export abstract class IAudiosStorageRepository {
    abstract upload(audio: AudioEntity & { buffer: Buffer }): Promise<string>;
}

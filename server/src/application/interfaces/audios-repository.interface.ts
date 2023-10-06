import { AudioEntity } from '../entities/audio.entity';

export abstract class IAudiosRepository {
    abstract create(audio: AudioEntity): Promise<void>;
}

import { AudioEntity } from '../entities/audio.entity';

export interface IAudiosRepository {
    create(audio: AudioEntity): Promise<void>;
}

export const IAudiosRepository = Symbol('IAudiosRepository');

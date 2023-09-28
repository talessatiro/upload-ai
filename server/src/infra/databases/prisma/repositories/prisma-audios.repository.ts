import { AudioEntity } from 'src/application/entities/audio.entity';
import { IAudiosRepository } from 'src/application/interfaces/audios-repository.interface';
import { PrismaService } from '../services/prisma.service';
import { PrismaAudioViewModel } from '../view-models/prisma-audio.view-model';

export class PrismaAudiosRepository implements IAudiosRepository {
    constructor(private readonly prisma: PrismaService) {}

    async create(audio: AudioEntity): Promise<void> {
        const raw = PrismaAudioViewModel.toPrisma(audio);

        await this.prisma.audio.create({
            data: raw,
        });
    }
}

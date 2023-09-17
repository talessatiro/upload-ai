import { Module } from '@nestjs/common';
import { PromptsController } from './controllers/prompts.controller';
import { ListPromptsUserCase } from 'src/application/user-cases/list-prompts.user-case';
import { DatabasesModule } from '../databases/databases.module';

@Module({
    providers: [ListPromptsUserCase],
    controllers: [PromptsController],
    imports: [DatabasesModule],
})
export class HTTPModule {}

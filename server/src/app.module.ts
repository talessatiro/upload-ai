import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        InfraModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

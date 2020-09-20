import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { PrintModule } from './print/print.module';

@Module({
  imports: [PrintModule, ConfigModule.forRoot()],
  controllers: [AppController]
})
export class AppModule {}

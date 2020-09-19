import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { PrintModule } from './print/print.module';

@Module({
  imports: [PrintModule],
  controllers: [AppController]
})
export class AppModule {}

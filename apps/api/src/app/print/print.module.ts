import { Module } from '@nestjs/common';

import { PrintController } from './print.controller';
import { PrintService } from './print.service';

@Module({
  imports: [],
  controllers: [PrintController],
  providers: [PrintService],
})
export class PrintModule {}

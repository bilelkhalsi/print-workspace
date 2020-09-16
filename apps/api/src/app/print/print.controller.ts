import { Controller, Post, Header, Body, Res } from '@nestjs/common';
import { PrintRequest } from '@print-workspace/api-interfaces';
import { PrintService } from './print.service';
import { Response } from 'express';
import { Readable } from 'stream';

@Controller()
export class PrintController {
  constructor(private readonly printService: PrintService) {}

  @Post('print')
  @Header('Content-Type', 'application/pdf')
  async exportToPdf(@Body() req: PrintRequest, @Res() res: Response) {
    const buffer = await this.printService.print(req);
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    res.set({'Content-Length': buffer.length, 'Content-Disposition' : `attachment; filename=${req.header}.pdf`});
    stream.pipe(res);
  }
}

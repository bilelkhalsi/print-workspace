import { Injectable, Logger } from '@nestjs/common';
import { PrintRequest } from '@print-workspace/api-interfaces';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PrintService {


    public async print(req: PrintRequest): Promise<Buffer> {
        Logger.log(`New print request : ${req.url}`);
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(req.url, { waitUntil: 'networkidle0' });
        await page.emulateMediaType('print');
        const pdf = await page.pdf({
            format: 'A4',
            printBackground: true,
            margin: { top: '100px', right: '30px', bottom: '100px', left: '30px' }
        });
        await browser.close();
        Logger.log(`print request done!`);
        return pdf

    }


}
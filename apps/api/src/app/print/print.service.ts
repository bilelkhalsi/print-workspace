import { Injectable, Logger } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import { Message, PrintRequest } from '@print-workspace/api-interfaces';
import {pageFooterTemplate, pageHeaderTemplate} from './print.helper';

@Injectable()
export class PrintService {


    public async print(req: PrintRequest): Promise<Buffer> {
        Logger.log(`New print request : ${req.url}`);
        const headerTemplate = pageHeaderTemplate(req.header);
        const footerTemplate = pageFooterTemplate(req.footer);
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(req.url, { waitUntil: 'networkidle0' });
        await page.emulateMediaType('print');
        const pdf = await page.pdf({
            format: 'A4',
            displayHeaderFooter: true,
            printBackground: true,
            headerTemplate,
            footerTemplate,
            margin: { top: '100px', right: '30px', bottom: '100px', left: '30px' }
        });
        await browser.close();
        Logger.log(`New print request done!`);
        return pdf

    }


}
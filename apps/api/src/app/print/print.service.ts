import { Injectable, Logger } from '@nestjs/common';
import { PrintRequest } from '@print-workspace/api-interfaces';
import {pageFooterTemplate, pageHeaderTemplate} from './print.helper';
import * as puppeteer from 'puppeteer';

@Injectable()
export class PrintService {


    public async print(req: PrintRequest): Promise<Buffer> {
        Logger.log(`New print request : ${req.url}`);
        const headerTemplate = pageHeaderTemplate(req.header);
        const footerTemplate = pageFooterTemplate(req.footer);
        const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.goto(req.url, { waitUntil: 'networkidle2' });
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
        Logger.log(`print request done!`);
        return pdf

    }


}
import { ApiProperty } from "@nestjs/swagger";

export class PrintRequest {

    @ApiProperty({description: 'The url of the HTML page to print'})
    url: string;

    @ApiProperty({description: 'Text to put on the header of each page'})
    header: string;

    @ApiProperty({description: 'Optional text to put on the footer of each page'})
    footer?: string;
}
import { ApiProperty } from "@nestjs/swagger";

export class PrintRequest {

    @ApiProperty({description: 'The url of the HTML page to print'})
    url: string;

    @ApiProperty({description: 'Generated filename'})
    filename: string;

}
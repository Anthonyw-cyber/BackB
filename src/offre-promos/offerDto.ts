import { ApiProperty } from '@nestjs/swagger';

export class OfferDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    body: string;
}


import { ApiProperty } from '@nestjs/swagger';

export class CreateEvenementDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;
}

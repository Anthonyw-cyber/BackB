import { ApiProperty } from '@nestjs/swagger';

export class CreateArtisantDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;


}

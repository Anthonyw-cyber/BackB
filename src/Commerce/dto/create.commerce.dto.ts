import { ApiProperty } from '@nestjs/swagger';

export class CreateCommerceDto {
  @ApiProperty()
  firstname: string;

  @ApiProperty()
  lastname: string;


}

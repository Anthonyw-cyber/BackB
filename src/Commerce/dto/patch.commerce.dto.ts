import { ApiPropertyOptional } from '@nestjs/swagger';

export class PatchCommerceDto {
  @ApiPropertyOptional()
  firstname: string;

  @ApiPropertyOptional()
  lastname: string;




}

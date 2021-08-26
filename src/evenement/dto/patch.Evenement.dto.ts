import { ApiPropertyOptional } from '@nestjs/swagger';

export class PatchEvenementDto {
  @ApiPropertyOptional()
  title: string;

  @ApiPropertyOptional()
  body: string;
}

import {ApiProperty} from '@nestjs/swagger';

export class adminDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}

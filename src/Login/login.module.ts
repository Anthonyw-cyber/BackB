import { Global, Module } from '@nestjs/common';
import { LoginService } from './login.service';

@Global()
@Module({
    providers: [LoginService],
    exports: [LoginService],
})
export class LoginModule {}

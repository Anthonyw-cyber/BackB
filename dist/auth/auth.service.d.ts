import { adminDto } from "../admin/admin.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    getToken(data: adminDto): string;
    decodeToken(token: string): string | {
        [key: string]: any;
    };
}

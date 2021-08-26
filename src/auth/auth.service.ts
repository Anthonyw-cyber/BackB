import { Injectable } from '@nestjs/common';
import {adminDto} from "../admin/admin.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {  constructor(private jwtService: JwtService) {}

    getToken(data: adminDto ): string {
        const payload = { data };
        return this.jwtService.sign(payload);
    }

    decodeToken(token: string) {
        return this.jwtService.decode(token);
    }}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtisantService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const artisant_entity_1 = require("./entity/artisant.entity");
let ArtisantService = class ArtisantService {
    constructor(artisantRepository) {
        this.artisantRepository = artisantRepository;
    }
    async findAllArtisant() {
        return await this.artisantRepository.find();
    }
    async getArtisantByID(id) {
        return await this.artisantRepository.findOne({ where: { id } });
    }
    async updateArtisant(id, data) {
        await this.artisantRepository.update({ id }, data);
        return await this.artisantRepository.findOne({ id });
    }
    async deleteArtisant(id) {
        await this.artisantRepository.delete({ id });
    }
    async postArtisant(data) {
        const Artisant = this.artisantRepository.create(data);
        await this.artisantRepository.save(data);
        return Artisant;
    }
    async findRand() {
        return await this.artisantRepository
            .createQueryBuilder()
            .orderBy('RAND()')
            .getMany();
    }
    async SetAvatar(id, AvatarUrl) {
        this.artisantRepository.update(id, { Avatar: AvatarUrl });
    }
    async setVideo(id, videoUrl) {
        this.artisantRepository.update(id, { video: videoUrl });
    }
    async findAbonnerRand() {
        return await this.artisantRepository.query('SELECT*FROM artisant WHERE Abonner = "Payer" ORDER BY RAND();');
    }
};
ArtisantService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(artisant_entity_1.Artisant)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArtisantService);
exports.ArtisantService = ArtisantService;
//# sourceMappingURL=artisant.service.js.map
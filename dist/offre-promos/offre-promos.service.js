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
exports.OffrePromosService = void 0;
const common_1 = require("@nestjs/common");
const offre_promos_entity_1 = require("./offre-promos.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let OffrePromosService = class OffrePromosService {
    constructor(offrePromoRepo) {
        this.offrePromoRepo = offrePromoRepo;
    }
    async getalloffre() {
        return await this.offrePromoRepo.find();
    }
    async create(data) {
        const user = this.offrePromoRepo.create(data);
        await this.offrePromoRepo.save(data);
        return user;
    }
    async getPromoByid(id) {
        return await this.offrePromoRepo.findOne({ where: { id } });
    }
    async updatePromo(id, data) {
        await this.offrePromoRepo.update({ id }, data);
        return await this.offrePromoRepo.findOne({ id });
    }
    async deleteByid(id) {
        await this.offrePromoRepo.delete({ id });
    }
    async SetAvatar(id, AvatarUrl) {
        this.offrePromoRepo.update(id, { Avatar: AvatarUrl });
    }
    async FindRand() {
        return await this.offrePromoRepo
            .createQueryBuilder()
            .orderBy('RAND()')
            .getMany();
    }
};
OffrePromosService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(offre_promos_entity_1.OffrePromosEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], OffrePromosService);
exports.OffrePromosService = OffrePromosService;
//# sourceMappingURL=offre-promos.service.js.map
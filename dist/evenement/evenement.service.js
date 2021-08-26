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
exports.EvenementService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const evenement_entity_1 = require("./evenement.entity");
let EvenementService = class EvenementService {
    constructor(evenementRepository) {
        this.evenementRepository = evenementRepository;
    }
    getEvenementall() {
        return this.evenementRepository.find();
    }
    async createEvenement(data) {
        const event = this.evenementRepository.create(data);
        await this.evenementRepository.save(data);
        return event;
    }
    async getbyID(id) {
        return await this.evenementRepository.findOne({ where: { id } });
    }
    async updateEvent(id, data) {
        await this.evenementRepository.update({ id }, data);
        return await this.evenementRepository.findOne({ id });
    }
    async deleteEvent(id) {
        await this.evenementRepository.delete({ id });
    }
    async SetAvatar(id, AvatarUrl) {
        this.evenementRepository.update(id, { Avatar: AvatarUrl });
    }
    async FindRand() {
        return await this.evenementRepository
            .createQueryBuilder()
            .orderBy('RAND()')
            .getMany();
    }
};
EvenementService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(evenement_entity_1.evenement)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EvenementService);
exports.EvenementService = EvenementService;
//# sourceMappingURL=evenement.service.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseTargetEntityPipe = exports.ParseEntityPipe = exports.ParseEntitySortActivePipe = void 0;
const common_1 = require("@nestjs/common");
class ParseEntitySortActivePipe {
    constructor(properties) {
        this.properties = properties;
    }
    transform(sortActive) {
        if (!sortActive) {
            return undefined;
        }
        if (!this.properties.includes(sortActive)) {
            return undefined;
        }
        return sortActive;
    }
}
exports.ParseEntitySortActivePipe = ParseEntitySortActivePipe;
class ParseEntityPipe {
    constructor(getEntityByID) {
        this.getEntityByID = getEntityByID;
    }
    transform(entityID) {
        return this.getEntityByID(entityID).then((entity) => {
            return entity;
        });
    }
}
exports.ParseEntityPipe = ParseEntityPipe;
class ParseTargetEntityPipe {
    constructor(badRequestException, notFoundException, getEntityByID) {
        this.badRequestException = badRequestException;
        this.notFoundException = notFoundException;
        this.getEntityByID = getEntityByID;
    }
    transform(entityID) {
        if (!entityID) {
            throw new common_1.BadRequestException(this.badRequestException.error(entityID), this.badRequestException.description(entityID));
        }
        return this.getEntityByID(entityID).then((entity) => {
            if (!entity) {
                throw new common_1.NotFoundException(this.notFoundException.error(entityID), this.notFoundException.description(entityID));
            }
            return entity;
        });
    }
}
exports.ParseTargetEntityPipe = ParseTargetEntityPipe;
//# sourceMappingURL=entity.pipe.js.map
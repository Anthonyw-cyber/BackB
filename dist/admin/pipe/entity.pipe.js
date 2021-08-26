"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseTargetEntityPipe = void 0;
const common_1 = require("@nestjs/common");
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
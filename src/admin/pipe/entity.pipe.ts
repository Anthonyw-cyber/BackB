import {IErrorObject} from "../../defaults/entity.pipe";
import { BadRequestException, NotFoundException, PipeTransform} from "@nestjs/common";

export abstract class ParseTargetEntityPipe<Type> implements PipeTransform {
    protected constructor(
        private badRequestException: IErrorObject,
        private notFoundException: IErrorObject,
        private getEntityByID: (string) => Promise<Type>,
    ) {
    }
    transform(entityID: string | undefined): Promise<Type> {
        if (!entityID) {
            throw new BadRequestException(
                this.badRequestException.error(entityID),
                this.badRequestException.description(entityID),
            );
        }
        return this.getEntityByID(entityID).then((entity) => {
            if (!entity) {
                throw new NotFoundException(
                    this.notFoundException.error(entityID),
                    this.notFoundException.description(entityID),
                );
            }

            return entity;
        });
    }
}


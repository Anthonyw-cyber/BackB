import { IErrorObject } from "../../defaults/entity.pipe";
import { PipeTransform } from "@nestjs/common";
export declare abstract class ParseTargetEntityPipe<Type> implements PipeTransform {
    private badRequestException;
    private notFoundException;
    private getEntityByID;
    protected constructor(badRequestException: IErrorObject, notFoundException: IErrorObject, getEntityByID: (string: any) => Promise<Type>);
    transform(entityID: string | undefined): Promise<Type>;
}

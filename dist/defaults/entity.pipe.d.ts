import { PipeTransform } from '@nestjs/common';
export interface IErrorObject {
    error: (item: string | undefined) => string;
    description: (item: string | undefined) => string;
}
export declare abstract class ParseEntitySortActivePipe implements PipeTransform {
    private properties;
    protected constructor(properties: string[]);
    transform(sortActive: string | undefined): string;
}
export declare abstract class ParseEntityPipe<Type> implements PipeTransform {
    private getEntityByID;
    protected constructor(getEntityByID: (string: any) => Promise<Type>);
    transform(entityID: string): Promise<Type | undefined>;
}
export declare abstract class ParseTargetEntityPipe<Type> implements PipeTransform {
    private badRequestException;
    private notFoundException;
    private getEntityByID;
    protected constructor(badRequestException: IErrorObject, notFoundException: IErrorObject, getEntityByID: (string: any) => Promise<Type>);
    transform(entityID: string | undefined): Promise<Type>;
}

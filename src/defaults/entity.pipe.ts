import { BadRequestException, NotFoundException, PipeTransform } from '@nestjs/common';

export interface IErrorObject {
  error: (item: string | undefined) => string;
  description: (item: string | undefined) => string;
}

export abstract class ParseEntitySortActivePipe implements PipeTransform {
  protected constructor(private properties: string[]) {}

  transform(sortActive: string | undefined) {
    if (!sortActive) {
      return undefined;
    }
    if (!this.properties.includes(sortActive)) {
      return undefined;
    }
    return sortActive;
  }
}

export abstract class ParseEntityPipe<Type> implements PipeTransform {
  protected constructor(private getEntityByID: (string) => Promise<Type>) {}

  transform(entityID: string): Promise<Type | undefined> {
    return this.getEntityByID(entityID).then((entity) => {
      return entity;
    });
  }
}

export abstract class ParseTargetEntityPipe<Type> implements PipeTransform {
  protected constructor(
    private badRequestException: IErrorObject,
    private notFoundException: IErrorObject,
    private getEntityByID: (string) => Promise<Type>,
  ) {}

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

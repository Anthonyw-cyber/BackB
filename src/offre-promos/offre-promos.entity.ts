import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

@Entity()
export class OffrePromosEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable:true})
    title: string;
    @Column({nullable:true})
    body: string;
    @Column({nullable: true})
    Avatar: string;
}

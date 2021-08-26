import { DateTime } from 'luxon';
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';




@Entity()
export class evenement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  title: string;

  @Column({nullable:true})
  body: string;

  @Column({nullable:true})
  Avatar: string;









}

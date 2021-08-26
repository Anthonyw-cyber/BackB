import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';



@Entity()
export class commerce {
  @PrimaryGeneratedColumn()
    id: number;

  @Column({nullable:true})
    firstname: string;

  @Column({nullable: true})
   lastname: string;

  @Column({nullable: true})
    email: string;

  @Column({nullable:true})
    profession: string;

  @Column({nullable:true})
   phone: string;

  @Column({nullable:true})
   adresse: string;

  @Column({nullable: true, length: 2000})
    desc: string;

  @Column({nullable:true})
   filename: string;

   @Column({nullable:true})
    linkSite:string;

   @Column({nullable:true})
    Facebook: string;

   @Column({nullable: true})
     Instagram: string;

   @Column({nullable: true})
    Abonner : string;

   @Column({nullable:true})
    Avatar: string;
  @Column({nullable:true})
    video:string;




}

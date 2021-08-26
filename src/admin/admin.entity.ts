import { BeforeInsert, Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import {hash, hashSync} from 'bcrypt';


@Entity()
export class admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true})
    username: string;

    @Column({nullable: true})
    password: string;


    token: string;
@BeforeInsert()
 encryptPassword() {
    this.password =  hashSync(this.password, 3);

}


}

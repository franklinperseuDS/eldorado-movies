
import bcrypt  from 'bcryptjs';
import {BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column('varchar')
    public name: string;

    @Column('varchar')
    public email: string;

    @Column('varchar')
    public password: string;

    @Column('date')
    public created_at: Date;

    @Column('date')
    public updated_at: Date;

    @BeforeInsert()
    public created(){
        this.created_at = new Date();
    }

    @BeforeUpdate()
    public updated(){
        this.updated_at = new Date();
    }

    @BeforeInsert()
    public async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}





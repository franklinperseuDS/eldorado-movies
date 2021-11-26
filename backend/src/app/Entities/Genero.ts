import {BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Genero {

    @PrimaryGeneratedColumn()
    public id: number;
    @Column('varchar')
    public name: string;
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

}

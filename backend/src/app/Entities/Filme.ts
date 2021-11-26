import {AfterLoad, JoinColumn} from "typeorm";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Genero } from "./Genero";
import slugifyConfig from "../../config/slugify"
import slugify from "slugify";


@Entity()
export class Filme {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column('varchar')
    public name: string;
    @Column()
    public slug: string;
    @Column('text')
    public sinopse: string;
    @Column('char', { length: 4 })
    public ano_lancamento: string;
    @Column('varchar')
    public faturamento: string;

    @ManyToOne(() => Genero)
    @JoinColumn({
        name: 'generoid',
        referencedColumnName: 'id',
    })
    public genero: Genero;

    @Column('varchar')
    public poster: string;
    @Column('boolean')
    public is_actived: boolean;
    @CreateDateColumn()
    public created_at: Date;
    @UpdateDateColumn()
    public updated_at: Date;
    
    public full_path: string;
    
    @BeforeInsert()
    public createdat() {
        this.created_at = new Date();
    }
    @BeforeUpdate()
    public updatedat() {
        this.updated_at = new Date();
    }

    @BeforeInsert()
    @BeforeUpdate()
    public addSlug() {
        this.slug = slugify(this.name, slugifyConfig)
    }

    @AfterLoad()
    public setFullPath() {
        this.full_path = `http://localhost:4001/static/filme/${this.poster}`;
    }

}




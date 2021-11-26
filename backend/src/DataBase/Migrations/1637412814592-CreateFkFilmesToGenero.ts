import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class CreateFkFilmesToGenero1637412814592 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey( 'filme',
        new TableForeignKey({
            columnNames: ['generoid'],
            referencedColumnNames: ['id'],
            referencedTableName: 'genero',
            name: 'fk_filme_genero'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            'filme','fk_filme_genero'
        )
    }

}

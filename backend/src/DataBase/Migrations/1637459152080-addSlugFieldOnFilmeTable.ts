import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class addSlugFieldOnFilmeTable1637459152080 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("alter table filme add slug varchar(255) not null after name;")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropColumn('filme', 'slug')
    }

}

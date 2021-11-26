import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createFilmeTable1637005087704 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'filme',
            columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: 'increment'
                },{
                    name: 'name',
                    type: 'varchar',
                    isNullable: false
                },{
                    name: 'sinopse',
                    type: 'text',
                    isNullable: false
                },
                {
                    name: "ano_lancamento",
                    type: "int",
                    isNullable:true
                },
                {
                    name: "faturamento",
                    type: "decimal(10,2)",
                    isNullable:true
                },
                {
                    name: "generoid",
                    type: "int",
                    length: "11",
                    isNullable: false
                                      
                },
                {
                    name: "poster",
                    type: "varchar",
                    isNullable: true
                },{
                    name: "is_actived",
                    type: "boolean",
                    default: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isNullable:false
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isNullable:true
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('filme')
    }

}

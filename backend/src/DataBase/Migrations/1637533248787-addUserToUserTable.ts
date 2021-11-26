import {MigrationInterface, QueryRunner} from "typeorm";
import bcrypt from 'bcryptjs'

export class addUserToUserTable1637533248787 implements MigrationInterface {
    name = 'addUserToUserTable1637533248787'

    public async up(queryRunner: QueryRunner): Promise<void> {
        const passwordHash = await bcrypt.hash('qwe123',10)
        const sql = `insert into user (id,name,email,password) values(null,'Super Administrador', 'admin@admin.com', '${passwordHash}')`;
        await queryRunner.query(sql);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete from user where email = 'admin@admin.com'`)
    }

}

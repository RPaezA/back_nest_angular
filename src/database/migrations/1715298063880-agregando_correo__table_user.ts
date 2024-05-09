import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregandoCorreo_tableUser1715298063880 implements MigrationInterface {
    name = 'AgregandoCorreo_tableUser1715298063880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

}

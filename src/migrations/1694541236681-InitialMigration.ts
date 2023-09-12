import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694541236681 implements MigrationInterface {
    name = 'InitialMigration1694541236681'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "uptadedAt" TO "updatedAt"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" RENAME COLUMN "updatedAt" TO "uptadedAt"`);
    }

}

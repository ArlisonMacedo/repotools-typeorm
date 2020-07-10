// eslint-disable-next-line
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class repository1594386522383 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'repository',
      columns: [
        {
          type: 'int',
          name: 'id',
          isPrimary: true
        },
        {
          type: 'varchar',
          name: 'title',
          isNullable: false
        },
        {
          type: 'varchar',
          name: 'link',
          isNullable: false
        },
        {
          type: 'varchar',
          name: 'description',
          isNullable: false
        },
        {
          type: 'text[]',
          name: 'tags'
        }
      ]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('repository')
  }
}

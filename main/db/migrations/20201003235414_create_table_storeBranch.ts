import { table } from "console";
import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('storeBranch', (table) => {
    table.bigInteger('id').primary().defaultTo(knex.raw('generate_id()'));
    table.bigInteger('name');
    table.string('description');
    table.text('address');
    table.timestamp('createdAt');
    table.timestamp('updatedAt');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('storeBranch');
}


import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('category', (table) => {
    table.bigInteger('id').primary().defaultTo(knex.raw('generate_id()'));
    table.string('name');
    table.text('description');
    table.timestamp('createdAt');
    table.timestamp('updatedAt');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('category');
}


import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('productInStore', (table) => {
    table.bigInteger('id').primary().defaultTo(knex.raw('generate_id()'));
    table.bigInteger('productId');
    table.string('quantity');
    table.text('description');
    table.bigInteger('storeBranchId')
    table.foreign('storeBranchId')
      .references('storeBranch.id')
      .onDelete('CASCADE');
    table.timestamp('createdAt');
    table.timestamp('updatedAt');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('productInStore');
}


import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.bigInteger('id').primary().defaultTo(knex.raw('generate_id()'));
    table.string('fullName');
    table.string('email', 191).unique();
    table.string('password');
    table.string('phoneNumber');
    table.string('address');
    table.string('avatar');
    table.string('systemRole').defaultTo('client');
    table.string('facebookId');
    table.string('googleId');
    table.string('appleId');
    table.timestamp('createdAt');
    table.timestamp('updatedAt');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}


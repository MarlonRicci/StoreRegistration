export async function up(knex) {
  return knex.schema.createTable('stores', (table) => {
    table.increments('id').primary();
    table.string('fantasyName').notNullable();
    table.string('billing').notNullable();
    table.string('city').notNullable();
    table.string('address').notNullable();
  });
}

export async function down(knex) {
  return knex.schema.dropTable('stores');
}

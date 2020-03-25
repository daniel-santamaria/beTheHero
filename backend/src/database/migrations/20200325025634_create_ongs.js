exports.up = function(knex) {
  return knex.schema.createTable('ongs', table => {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable(); // O 2 representa o tamanho da string fixado no armazenamento
  });
};

// método UP é responsável pela criação da tabela

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

// método DOWN representa o comando a ser executado caso seja necessário retroceder a função UP
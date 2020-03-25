exports.up = function(knex) {
    return knex.schema.createTable('incidents', table => {
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable(); // Criação da referência para o relacionamento com a tabela de ONGs

        table.foreign('ong_id').references('id').inTable('ongs'); // Criação do relacionamento com a tabela de ONGs: "A coluna ong_id se refere à coluna id dentro da tabela ongs"
    });
  };
  
  // método UP é responsável pela criação da tabela
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  
  // método DOWN representa o comando a ser executado caso seja necessário retroceder a função UP
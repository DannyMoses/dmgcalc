
exports.up = function(knex) {
  return knex.schema.table('units', table => {

  	table.integer('devotion')
})
};

exports.down = function(knex) {
  
};

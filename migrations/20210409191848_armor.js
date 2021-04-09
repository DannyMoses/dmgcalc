
exports.up = function(knex) {
	return knex.schema.createTable('armor', table => {
		table.increments('id')
		table.integer('def_mod')
		table.string('name')
	})
};

exports.down = function(knex) {
  
};

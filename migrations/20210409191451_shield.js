
exports.up = function(knex) {
	return knex.schema.createTable('shields', table => {
		table.increments('id')
		table.integer('def_mod')
		table.string('name')
	})
};

exports.down = function(knex) {
  
};

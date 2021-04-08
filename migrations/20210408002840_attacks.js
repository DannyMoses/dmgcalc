
exports.up = function(knex) {
	return knex.schema.createTable('attacks', table => {
		table.increments('id')
		table.string('type')
		table.string('calculation')
	})
};

exports.down = function(knex) {
  
};

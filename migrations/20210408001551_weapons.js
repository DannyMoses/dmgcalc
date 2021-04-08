
exports.up = function(knex) {
	return knex.schema.createTable('weapons', table => {
		table.increments('id')
		table.string('name')
		table.integer('base_dmg')
		table.integer('hit')
		table.integer('range')
		table.string('type')
	})
};

exports.down = function(knex) {
  
};

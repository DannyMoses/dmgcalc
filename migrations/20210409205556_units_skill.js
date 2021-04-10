
exports.up = function(knex) {
	return knex.schema.table('units', table => {
		table.integer('skill')
	})
};

exports.down = function(knex) {
  
};

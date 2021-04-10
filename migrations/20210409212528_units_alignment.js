
exports.up = function(knex) {
	return knex.schema.table('units', table => {
		table.string('alignment')
	})
};

exports.down = function(knex) {
  
};

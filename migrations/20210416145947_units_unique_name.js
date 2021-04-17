
exports.up = function(knex) {
	return knex.schema.table('units', table => {
		table.unique('name')
	})
};

exports.down = function(knex) {
  
};

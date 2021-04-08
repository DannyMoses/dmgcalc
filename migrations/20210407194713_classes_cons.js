
exports.up = function(knex) {
	return knex.schema.table('classes', table => {
		table.unique('name')
	})
};

exports.down = function(knex) {
  
};

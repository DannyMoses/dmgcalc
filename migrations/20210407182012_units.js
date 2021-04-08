
exports.up = function(knex) {
	return knex.schema.table('units', table => {
		table.string('name')
		} )
};

exports.down = function(knex) {
  
};

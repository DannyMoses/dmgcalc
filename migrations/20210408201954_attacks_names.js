
exports.up = function(knex) {
	return knex.schema.table('attacks', table => {
		table.string('name');
	})
};

exports.down = function(knex) {
  
};

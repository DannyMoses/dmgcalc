exports.up = function(knex) {
	return knex.schema.table('units', table => {
	table.foreign('class').references('classes.name')
	})
	};
	exports.down = function(knex) {
	};


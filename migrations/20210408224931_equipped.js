
exports.up = function(knex) {
	return knex.schema.createTable('equippedItem', table => {
		table.increments('id')
		table.integer('charid')
		table.integer('itemid')
	})
};

exports.down = function(knex) {
  
};

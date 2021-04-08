
exports.up = function(knex) {
	return knex.schema.createTable('classes', table => {
		table.increments('id')
		table.string('name')
		table.integer('vision')
		table.integer('def_mod')
		table.integer('atk_mod')
		table.integer('str_mod')
		table.integer('dev_mod')
		table.integer('dex_mod')
		table.integer('agi_mod')
		table.integer('hp_mod')
		table.integer('for_mod')
	})
		  
};

exports.down = function(knex) {
  
};

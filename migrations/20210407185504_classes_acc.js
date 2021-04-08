
exports.up = function(knex) {
	return knex.schema.table('classes', table => {
		table.string('acc_mod')
	})
  
};

exports.down = function(knex) {
  
};

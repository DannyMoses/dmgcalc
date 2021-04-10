
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {name : 'test', 'health' : 10, 'strength' : 10, 'dexterity' : 10, 'agility' : 10, 'luck' : 10, 'fortitude' : 10, 'skill' : 10, 'devotion' : 10, 'class' : 'green unit', 'alignment': 'imperial'},
	{name : 'Luther', 'health' : 17, 'fortitude' : 3, 'strength' : 5, 'dexterity' : 3, 'luck' : 2, 'devotion' : 0, 'class' : 'spear militia', 'skill' : 2, 'alignment': 'imperial'},
	{name : 'target dummy', 'health' : 15, 'dexterity' : 2, 'agility' : 2, 'skill' : 3, 'strength' : 3, 'devotion' : 0, 'luck' : 2, 'fortitude' : 0, 'class' : 'green unit', 'alignment': 'imperial'}
      ]);
    });
};

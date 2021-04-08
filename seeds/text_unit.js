
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('units').del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {id: 1, name : 'test', 'health' : 10, 'strength' : 10, 'dexterity' : 10, 'agility' : 10, 'luck' : 10, 'fortitude' : 10, 'class' : 'green unit'}
      ]);
    });
};

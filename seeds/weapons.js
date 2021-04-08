
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('weapons').del()
    .then(function () {
      // Inserts seed entries
      return knex('weapons').insert([
        {name : 'spear of testing', base_dmg : 4, hit : 75, range : 1, type : 'spear'}
      ]);
    });
};

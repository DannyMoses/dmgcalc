
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {name: 'green unit', vision : 4, def_mod : 1, atk_mod : 1, str_mod : 0, dev_mod : 0, dex_mod: 0, agi_mod : 0, hp_mod : 0, for_mod : 0, acc_mod : 60},
	{name: 'spear militia', vision : 4, def_mod : 1, atk_mod : 1, str_mod : 0, dev_mod : 0, dex_mod: 0, agi_mod : 0, hp_mod : 0, for_mod : 0, acc_mod : 60}
      ]);
    });
};

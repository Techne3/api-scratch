
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {name: 'eggs'},
        {name: 'broccoli'},
        {name: 'push-ups'},
        {name: 'cardio'},
        {name: 'finish lambda projects'},
        {name: 'give my dog a bath'},
        {name: 'buy groceries'},
      ]);
    });
};

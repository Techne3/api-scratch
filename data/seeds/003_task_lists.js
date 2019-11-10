
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task_lists').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task_lists').insert([
        {task_id:1 , list_id:1 , description: '2 packs, soba'},
        {task_id:2 , list_id:1 , description: 'one dozen'},
        {task_id:3 , list_id:1, description: '1 bunch'},
        {task_id:4 , list_id:2 , description: '14 reps, 3 sets'},
        {task_id:5 , list_id:2 , description: 'bench press'},
        {task_id:6 , list_id: 3, description: 'data modeling'},
        {task_id:7 , list_id: 3, description: 'clean'},
      ]);
    });
};

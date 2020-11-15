exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("posts")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("posts").insert([
        {
          photo:
            "https://images.unsplash.com/photo-1604403018948-d66de4f8c4e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          story: "Spent some time in the mountains today!",
          user_id: 1,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
          story: "We are really high up here! LOL",
          user_id: 1,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1562639410-3f9ff4e00b15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=639&q=80",
          story: "Feeling tropical!",
          user_id: 2,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1605100590270-e87b8951c290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
          story: "Found a cool spot in the forrest :)",
          user_id: 2,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1553536590-d28c5d5dee92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80",
          story: "Beautiful sunset tonight",
          user_id: 2,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1554282493-2cd18ebfa09e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1154&q=80",
          story: "Just a sample of our hike today!",
          user_id: 3,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1547065605-aa7b9912fffd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "It's really cold here LOL",
          user_id: 3,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1605126394901-72eba9bf67f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "Up close and personal!",
          user_id: 4,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1604770627436-387803fe809e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "Much needed beach day today",
          user_id: 4,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1605100970536-2046737bc76d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "On a road less traveled",
          user_id: 4,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1597688770033-77623166fe97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "Don't look down!",
          user_id: 4,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1604890574377-b1830f2e48e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "I definitely captured this pic on the first try LOL",
          user_id: 5,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1604689910903-68729001a0d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "Met a new friend today :)",
          user_id: 5,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1604656108790-e02b18c713da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "What a view",
          user_id: 6,
        },
        {
          photo:
            "https://images.unsplash.com/photo-1604608672516-f1b9b1d37076?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          story: "So cool to see this in person for the first time!",
          user_id: 6,
        },
      ]);
    });
};

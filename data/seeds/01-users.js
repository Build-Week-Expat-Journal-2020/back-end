exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "nature-lover23",
          password:
            "$2y$12$yTPFgnur7lLz9xhJYQZhGOnI7bE71UgMyIXAS4sjkWuLUsUiu1sde",
        },
        {
          username: "coolguy22",
          password:
            "$2y$12$OiaeOt6HcMzW9S1sVU178OG.IwlwDGfOexrEVCsI8isYvYhFm3tGG",
        },
        {
          username: "TrevorBeadle",
          password:
            "$2y$12$zn2ZzhQOwyA/yBCy/Bo9je3t2xrJB1vl5mp8FxhidkFJ9JvCxK0S2",
        },
        {
          username: "mrivera6197",
          password:
            "$2y$12$.XIM/aQVnvwCA5XWyqXpNe7pLzAfYlqlU2zn86VTZIl2whhxLm1Q2",
        },
        {
          username: "mbenson3434",
          password:
            "$2y$12$zn2ZzhQOwyA/yBCy/Bo9je3t2xrJB1vl5mp8FxhidkFJ9JvCxK0S2",
        },
        {
          username: "fidan93",
          password:
            "$2y$12$.wj.harhjuyy421eq4x9O.khJcL4Wtd7DH8GPE8w3sbAnDKniOanG",
        },
      ]);
    });
};

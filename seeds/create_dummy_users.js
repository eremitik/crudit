exports.seed = function (knex) {
    return knex('userID').del()
        .then(function () {
            return knex('userid').insert([
                { userid: 1, username: 'kdog69', message: 'yo its Keanu, get fit bro.' },
                { userid: 2, username: 'ryangossss', message: 'Gosling here, get those abs in!' }
            ]);
        });
};
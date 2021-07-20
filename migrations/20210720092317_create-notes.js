exports.up = function (knex) {
    return knex.schema.createTable('notes', (table) => {
        table.increments('userid');
        table.string('username');
        table.string('message');
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable('notes');
};
import 'sqlite3';
import knex from 'knex';
import * as path from 'path';
// import { app } from 'electron';

const database = knex({
  client: 'sqlite3',
  connection: {
    filename: './db-dev.sqlite'
  },
  useNullAsDefault: true
});

database.schema.hasTable('items').then(exists => {
  if (!exists) {
    return database.schema.createTable('items', t => {
      t.increments('id').primary();
      t.string('value', 100);
      t.boolean('packed');
    });
  }
});

export default database;
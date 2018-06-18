const pg = require('pg');
//const connectionString = 'postgres://postgres:postgres@db.cxw9rddrpw9p.us-east-2.rds.amazonaws.com:5432/postgresdb' ;
const connectionString = process.env.DATABASE_URL;

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });

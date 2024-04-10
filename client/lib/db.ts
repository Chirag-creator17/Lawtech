const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'health',
  password: 'postgres',
  port: 5432, // default PostgreSQL port
});

export default pool;
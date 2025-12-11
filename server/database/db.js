import pkg from 'pg';// Import the pg package for PostgreSQL
const { Client } = pkg;// Destructure Client from pg package

const database = new Client({// Database connection configuration
  user: "postgres",//process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: "0000",//process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

try {// Connect to the database
  await database.connect();// Await the connection to ensure it's established before proceeding
  console.log('Database connected successfully');
} catch (error) {// Handle connection errors
  console.error('Database connection error:', error);
  process.exit(1);
}

export default database; // Export the connected database client
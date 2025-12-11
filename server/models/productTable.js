import database from "../database/db.js";// Import the database client

export async function createProductsTable() {// Function to create the products table
  try {// Try to execute the table creation query
    const query = `CREATE TABLE IF NOT EXISTS products (
         id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         description TEXT NOT NULL,
         price DECIMAL(7,2) NOT NULL CHECK (price >= 0),
         category VARCHAR(100) NOT NULL,
         ratings DECIMAL(3,2) DEFAULT 0 CHECK (ratings BETWEEN 0 AND 5),
         images JSONB DEFAULT '[]'::JSONB,
         stock INT NOT NULL CHECK (stock >= 0),
         created_by UUID NOT NULL,
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE);`;
    await database.query(query);// Execute the query to create the table
  } catch (error) {// Catch and log any errors during table creation
    console.error("❌ Failed To Create Products Table.", error);//  Log the error
    process.exit(1);// Exit the process with failure
  }
}
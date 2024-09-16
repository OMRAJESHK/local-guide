// lib/database.js

import Database from "better-sqlite3";
import path from "path";

// Path to the SQLite database file
const dbPath = path.resolve(
  process.cwd(),
  "src/server/data",
  "local_guide.sqlite"
);

// Initialize the SQLite database
const db = new Database(dbPath, { verbose: console.log });

// Example: Create a sample table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS places (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(255) NOT NULL,
    place VARCHAR(255) NOT NULL,
    known_for TEXT NOT NULL,
    map_link VARCHAR(255) NOT NULL,
    person_known VARCHAR(255),
    person_mobile VARCHAR(15),
    remarks TEXT NOT NULL
)
`);

export default db;

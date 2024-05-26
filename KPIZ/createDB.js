const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

// Створення таблиці homes
db.serialize(() => {
  db.run(`CREATE TABLE homes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    floors INTEGER,
    system TEXT,
    description TEXT,
    adress TEXT
  )`);
});

db.close();
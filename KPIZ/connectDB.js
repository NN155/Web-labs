const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('data.db');

// Функція для отримання даних з бази даних
const getAllHomes = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM homes', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const addHome = (name, floors, system, description, adress) => {
  console.log(adress)
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO homes (name, floors, system, description, adress) VALUES (?, ?, ?, ?, ?)`,
        [name, floors, system, description, adress],
        function(err) {
          if (err) {
            reject(err);
          } else {
            resolve({ id: this.lastID });
          }
        });
    });
};

module.exports = { getAllHomes, addHome };
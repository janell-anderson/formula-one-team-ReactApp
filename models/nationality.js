const db = require('../config/connection');

// REMEMBER: some function names will have 's'

// calling all teams
function getAllNations() {
  return db.any(`
    SELECT *
    FROM nationality
    `);
}

// calling each Nation by personal id
function getOneNation(id) {
  return db.one(`
    SELECT *
    FROM nationality
    WHERE id = $1
    `, id);
}

function getDriverNation(id) {
  return db.any(`
    SELECT * FROM nationality
    JOIN driver
    ON driver.nation_id = nationality.id
    WHERE driver.nation_id = $1
    `, id);
}

module.exports = {
  getAllNations,
  getOneNation,
  getDriverNation
}

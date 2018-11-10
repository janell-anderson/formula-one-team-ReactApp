const db = require('../config/connection');

// REMEMBER: some function names will have 's'

// calling all teams
function getAllCountries() {
  return db.any(`
    SELECT *
    FROM country
    `);
}

// calling each Country by personal id
function getOneCountry(id) {
  return db.one(`
    SELECT *
    FROM country
    WHERE id = $1
    `, id);
}

function getDriverCountry(id) {
  return db.any(`
    SELECT * FROM country
    JOIN driver
    ON driver.country_id = country.id
    WHERE driver.country_id = $1
    `, id);
}

module.exports = {
  getAllCountries,
  getOneCountry,
  getDriverCountry
}

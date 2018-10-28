const db = require('../config/connection');

function getAllDrivers() {
    return db.any(`
        SELECT * FROM driver
        `);
}

function getOneDriver(id) {
    return db.one(`
        SELECT * 
        FROM driver
        WHERE id = $1
        `, id)
}

function createDriver(driver) {
    return db.one(`
        INSERT INTO driver
        (carnum, name, team, nationality)
        VALUES ($/carnum/, $/name/, $/team/, $/nationality/)
        RETURNING * 
    `, driver)
}

function updateDriver(driver) {
    return db.one(`
        UPDATE driver
        SET carnum = $/carnum/, name = $/name/, team = $/team/, nationality = $/nationality/
        WHERE id = $/id/
        RETURNING *
    `, id)
}

function destroyDriver(id) {
    return db.one(`
        DELETE FROM driver
        WHERE id = $1
    `, id)
}

module.exports = {
    getAllDrivers,
    getOneDriver,
    createDriver,
    updateDriver,
    destroyDriver
}
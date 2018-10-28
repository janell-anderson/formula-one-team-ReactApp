module.exports = process.env.DATABASE_URL || {
    host: 'locahost',
    port: 5432,
    database: 'teams_db'
}
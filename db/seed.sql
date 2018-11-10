-- CREATE DATABASE teams_db;
-- created database here instead of doing it in the terminal
-- used the commands 'psql -f seed.sql' 

/* POSTGRESQL COMMANDS
 - \c connect to database
 - \l list all databases
 - \dt list tables from all schemas
*/

-- drops the table if it already exists which also gives
-- you back the original data before you added new ones
DROP TABLE IF EXISTS country CASCADE;
DROP TABLE IF EXISTS driver CASCADE;

-- took out images for the mean time

CREATE TABLE country (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE driver (
  id SERIAL PRIMARY KEY,
  carnum INTEGER,
  name TEXT ,
  country TEXT,
  team TEXT,
  nation_id INTEGER REFERENCES country(id)
--   img_url VARCHAR(400)
);

-- Took out img_url because images are not working on the original project.


INSERT INTO country (name)
VALUES
('Australia'),
('Belgium'),
('Canada'),
('Denmark'),
('England'),
('Finland'),
('France'),
('Germany'),
('Mexico'),
('Monaco'),
('Netherlands'),
('New Zealand'),
('Russia'),
('Spain'),
('Sweden');



INSERT INTO driver (carnum, name, country, team, nation_id)
VALUES
(44,'Lewis Hamilton','England', 'Mercedes', 5),
(77, 'Valtteri Bottas','Finland', 'Mercedes', 6),
(5, 'Sebastian Vettel', 'Germany', 'Ferrari', 8),
(7, 'Kimi Raikkonen', 'Finland', 'Ferrari', 6),
(3,'Daniel Ricciardo', 'Australia', 'Red Bull Racing', 1),
(33,'Max Verstappen', 'Netherlands', 'Red Bull Racing', 11),
(14,'Fernando Alonso', 'Spain', 'McClaren', 14),
(2,'Stoffel Vandoorne', 'Belgium', 'McClaren', 2),
(27, 'Nico Hulkenburg', 'Germany', 'Renault', 8),
(55, 'Carlos Sainz', 'Spain', 'Renault', 14),
(10, 'Pierre Gasly', 'France', 'Toro Rosso', 7),
(28, 'Brendon Hartley', 'New Zealand', 'Toro Rosso', 12),
(8, 'Romain Grosjean', 'France', 'Haas', 7),
(20, 'Kevin Magnussen', 'Denmark', 'Haas', 4),
(9, 'Marcus Ericsson', 'Sweden', 'Sauber', 15),
(16, 'Charles Leclerc', 'Monaco', 'Sauber', 10),
(11, 'Sergio Perez', 'Mexico', 'Force India', 9),
(31, 'Esteban Ocon', 'France', 'Force India', 7),
(18, 'Lance Stroll', 'Canada', 'Williams', 3),
(35, 'Sergey Sirotkin', 'Russia', 'Williams', 13);

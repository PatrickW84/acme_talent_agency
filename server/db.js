const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL ||
    "postgres://postgres:postgres@localhost/acme_talent_agency_db"
);

module.exports = {
  client,
};

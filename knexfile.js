// Update with your config settings.
const { MYSQL_CONN_STRING } = require("./secrets");
const path = require("path");

module.exports = {
  development: {
    client: "mysql",
    connection: MYSQL_CONN_STRING,
    migrations: {
      directory: path.join(__dirname, "src/server/db/migrations")
    }
  },
  production: {
    client: "mysql",
    connection: MYSQL_CONN_STRING,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.join(__dirname, "src/server/db/migrations")
    }
  }
};

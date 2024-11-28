const dotenv = require('dotenv')
dotenv.config();

const knex = require("knex")({
    client: "pg",
    connection: {
      host: process.env.PGHOST,
      user: process.env.PGUSER,
      port: 5432,
      password: process.env.PGPASSWORD, 
      database: process.env.PGDATABASE,
      ssl: require // Esto permite conexiones SSL sin verificación del certificado
    },
  });
  
  module.exports = knex;
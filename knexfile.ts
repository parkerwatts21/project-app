import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_ENDPOINT || 'localhost',
      user: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'pw1007',
      database: process.env.DB_NAME || 'donuts',
      port: Number(process.env.DB_PORT) || 5432,
    },
    migrations: {
      directory: './src/app/db/migrations',
    },
    seeds: {
      directory: './src/app/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_ENDPOINT || 'localhost',
      user: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'pw1007',
      database: process.env.DB_NAME || 'donuts',
      port: Number(process.env.DB_PORT) || 5432,
    },
    migrations: {
      directory: './src/app/db/migrations',
    },
    seeds: {
      directory: './src/app/db/seeds',
    },
  },
};

export default config;
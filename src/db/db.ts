import knex from 'knex'; // Default import

import config from '../../knexfile';

const environment = process.env.NODE_ENV || 'development';
const db = knex(config[environment]); // Initialize knex with the correct environment

export default db;
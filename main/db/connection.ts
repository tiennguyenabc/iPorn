import * as dotenv from 'dotenv';
import knexfile from '../../knexfile';
import * as knex from 'knex';

interface config {
  client: string
  connection: string,
  migrations: {
    directory: string,
  },
  seeds: {
    directory: string,
  },
}

dotenv.config({ path: '../../../.env' });

const environment: string = process.env.NODE_ENV || 'development';
const config: config = knexfile[environment];

export default knex(config);

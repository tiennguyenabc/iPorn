import * as dotenv from 'dotenv';
import knexfile from '../../knexfile';
import * as knex from 'knex';
dotenv.config({ path: '../../../.env' });

const environment: string = process.env.NODE_ENV || 'development';
const config: object = knexfile[environment];

export default knex(config);

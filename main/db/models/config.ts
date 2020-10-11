import { Model } from 'objection';
import knexPostgis from 'knex-postgis';
import knex from '../connection';

Model.knex(knex);

const st = knexPostgis(knex);

export {
  Model,
  st,
  knex
}
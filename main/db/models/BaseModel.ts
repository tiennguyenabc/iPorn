import { QueryBuilder } from 'objection';
import { buildFilter } from 'objection-filter';
import { Model, knex } from './config';

class BaseModel extends Model {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;

  static get QueryBuilder() {
    return QueryBuilder;
  }

  static queryBuilder(query, baseModel, hasJoin) {
    const builder = buildFilter(this).build(query, baseModel);
    return builder;
  }
}

export default BaseModel;
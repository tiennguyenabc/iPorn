import { QueryBuilder } from 'objection';
import { buildFilter } from 'objection-filter';
import { Model, knex } from './config';

class BaseModel extends Model {
  static get QueryBuilder() {
    return QueryBuilder;
  }

  static queryBuilder(query, baseModel, hasJoin) {
    const builder = buildFilter(this).build(query, baseModel);
    return builder;
  }
}

export default BaseModel;
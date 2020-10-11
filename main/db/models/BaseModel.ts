import { QueryBuilder, QueryBuilderType } from 'objection';
import { buildFilter } from 'objection-filter';
import { Model, knex } from './config';

class BaseModel extends Model {
  id: string;
  createdAt: Date | string;
  updatedAt: Date | string;

  query(): QueryBuilderType<Model> {
    return this.query();
  }

  queryBuilder(query): Promise<BaseModel> {
    const builder = buildFilter(this).build(query);
    return builder;
  }
}

export default BaseModel;
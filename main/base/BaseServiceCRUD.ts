import 'module-alias/register';
import BaseModel from "@/db/models/BaseModel";

const Boom = require('@hapi/boom');

class BaseServiceCRUD {
  model: BaseModel;
  modelName: string;

  constructor(model, modelName) {
    this.model = model;
    this.modelName = modelName;
  }

  async getMany(query) {
    const builder = this.model.queryBuilder(query);
    return builder;
  }

  async count() {
    return await this.model
      .query()
      .count('id as count')
      .first();
  }

  async getOne(id) {
    const result = await this.model.query().findById(id);
    if (!result) {
      throw Boom.notFound(`${this.modelName} not found`);
    }
    return result;
  }

  async createOne(payload) {
    return this.model
      .query()
      .insert(payload)
      .returning('*');
  }

  async updateOne(id, payload) {
    const result = await this.model.query().patchAndFetchById(id, payload);
    if (!result) {
      throw Boom.notFound(`${this.modelName} not found`);
    }
    return result;
  }

  async deleteOne(id) {
    await this.model.query().deleteById(id);
    return { success: true };
  }

}

export default BaseServiceCRUD;

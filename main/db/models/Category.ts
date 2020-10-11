import BaseModel from './BaseModel';

class Category extends BaseModel {
  name: string;
  description: string;

  static get tableName() {
    return 'category';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

export default Category;

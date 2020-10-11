import BaseModel from './BaseModel';

class Product extends BaseModel {
  categoryId: string;
  name: string;
  description: string;
  price: string;
  images: {
    key: string,
    url: string
  }

  static get tableName() {
    return 'product';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

export default Product;

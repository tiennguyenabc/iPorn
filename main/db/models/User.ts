import BaseModel from './BaseModel';

interface User {
  fullName: String,
  email: String,
  phoneNumber: String | Number,
  address: String,
  avatar: String,
  systemRole: String,
  facebookId: String,
  googleId: String,
  appleId: String,
  createdAt: Date | String,
  updatedAt: Date | String
}

class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

export default User;
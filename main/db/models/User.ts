import BaseModel from './BaseModel';

interface User {
  fullName: string,
  email: string,
  password: string,
  phoneNumber: string | number,
  address: string,
  avatar: string,
  systemRole: string,
  facebookId: string,
  googleId: string,
  appleId: string,
  createdAt: Date | string,
  updatedAt: Date | string
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
import BaseModel from './BaseModel';

class User extends BaseModel {
  id: string;
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  address: string;
  avatar: string;
  systemRole: string;
  facebookId: string;
  googleId: string;
  appleId: string;
  createdAt: Date | string;
  updatedAt: Date | string;

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

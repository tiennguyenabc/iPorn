import * as bcrypt from 'bcrypt';
import config from '../config';
function hash(password): string {
  return bcrypt.hash(password, config.password.round);
}

function hashSync(password): string {
  return bcrypt.hashSync(password, config.password.round);
}

function compare(password, hash): boolean {
  return bcrypt.compare(password, hash);
}

function compareSync(password, hash): boolean {
  return bcrypt.compareSync(password, hash);
}

export {
  hash,
  hashSync,
  compare,
  compareSync
}
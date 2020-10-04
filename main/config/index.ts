import * as dotenv from 'dotenv';
dotenv.config();

interface config {
  db: {
    uri: string
  },
  jwt: {
    accessKeySecret: string,
    refreshKeySecret: string,
    accessTokenLife: number,
    refreshTokenLife: number
  },
  password: {
    round: number
  }
}

const config: config = {
  db: {
    uri: process.env.DATABASE_URL,
  },
  jwt: {
    accessKeySecret: process.env.ACCESS_JWT_SECRET || 'accesskindi2)@0',
    refreshKeySecret: process.env.REFRESH_JWT_SECRET || 'refreshkindi2)@0',
    accessTokenLife: 10 * 365 * 3600 * 24, // 15 minutes
    refreshTokenLife: 10 * 365 * 3600 * 24, // 10 years very long time token
  },
  password: {
    round: 7,
  },
}

export default config;
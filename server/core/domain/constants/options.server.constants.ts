import * as env from 'dotenv';

env.config();

export const SERVER_OPTIONS = {
  PORT: process.env.PORT_SERVER,
  PROTOCOL: 'http',
  HOST: 'localhost',
};

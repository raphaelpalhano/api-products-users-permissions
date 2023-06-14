import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { CreateUsers1686615165788 } from './migrations/1686615165788-CreateUsers';
import { UsersEntity } from './entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'my-store-db',
  synchronize: true,
  logging: true,
  entities: [UsersEntity],
  migrations: [CreateUsers1686615165788],
  subscribers: [],
});

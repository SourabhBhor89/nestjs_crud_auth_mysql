import { DataSource } from 'typeorm';
//import { User } from './entities/user.entity'; // Import your entities

export const AppDataSource = new DataSource({
  type: 'mysql', // or 'postgres', 'sqlite', etc.
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'admindb',
  entities: [], // Add your entities here
  migrations: ['src/migrations/*.ts'], // Path to your migrations
  synchronize: false,
  logging: false,
});
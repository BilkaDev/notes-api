import { DataSource } from "typeorm";
import { Note } from "../notes/model/notes.entity";

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: 'db',
  logging: true,
  entities: [Note],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true,
});

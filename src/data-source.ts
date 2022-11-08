import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

// import { Student } from "./entity/Student"
import { createConnection } from "typeorm";
export const AppDataSource = new DataSource({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "test",
  synchronize: true,
  logging: true,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
});

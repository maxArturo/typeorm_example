import "reflect-metadata"
import { DataSource } from "typeorm"
import { Post } from "./entity/Post"
import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [Post, Category],
  subscribers: [],
  migrations: [],
})

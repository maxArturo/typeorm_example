import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Category } from "./Category"

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column("text")
  text: string

  @ManyToOne(() => Category, (category) => category.posts, { nullable: true })
  @JoinColumn()
  category: Category | null
}

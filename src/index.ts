import { Post } from "./entity/Post"
import { Category } from "./entity/Category"
import { AppDataSource } from "./data-source"

AppDataSource.initialize()
  .then(async () => {
    const category1 = new Category()
    category1.name = "TypeScript"
    await AppDataSource.manager.save(category1)

    const post = new Post()
    post.title = "TypeScript"
    post.text = `TypeScript is Awesome!`
    post.category = null

    await AppDataSource.manager.save(post)

    console.log("Post has been saved: ", post)

    const found = await AppDataSource.getRepository(Post).findOne({})

    // Here we expect TS to tell us this is wrong, since we need to handle the null
    // but no problems?
    const foo = found.category.posts
    
    console.log("No TS errors somehow: ", foo)
  })
  .catch((error) => console.log("Error: ", error))

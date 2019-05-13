import { Author,Post } from '../entity/graphql';



export class PostsService {
  private readonly posts:Post[] = [{
    id: 1,
    title: "Reddit",
    votes: 5
  }]
  findAll(id: Author): Post[] {
    console.log(id)
    return this.posts
  }
}

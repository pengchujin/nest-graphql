import { Resolver, Query, ResolveProperty, Args, Parent } from "@nestjs/graphql";
import { AuthorsService } from './AuthorService'
import { PostsService } from './PostService'

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly postsService: PostsService,
  ) {}

  @Query('author')
  async findOneById(@Args('id') id: number) {
    console.log('test')
    return await this.authorsService.findOneById(id);
  }

  @ResolveProperty()
  async posts(@Parent() author) {
    console.log('Get Posts')
    const { id } = author;
    return await this.postsService.findAll({ id: id });
  }

  @Query('posts')
  async find(@Args('id') id: number) {
    return [{
      id: 1,
      title: 'test',
      votes: 3
    }]
  }

}

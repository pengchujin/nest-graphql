import { Module } from '@nestjs/common';
import { AuthorResolver } from './resolver/AuthorResolver';
import { AuthorsService } from './resolver/AuthorService';
import { PostsService } from './resolver/PostService'

@Module({
  providers: [PostsService, AuthorResolver, AuthorsService],
})
export class ApiModule {}

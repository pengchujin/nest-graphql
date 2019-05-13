import { Injectable } from '@nestjs/common';
import { Author,Post } from '../entity/graphql';


export class AuthorsService {
  private readonly posts:Post[] = [{
    id: 1,
    title: "Reddit",
    votes: 5
  }]

  private readonly author:Author = {
      id: 1,
      firstName: "Hello",
      lastName: "World",
      posts: this.posts
  }
  findOneById(id: number): Author {
    console.log(this.posts)
    return this.author
  }
}


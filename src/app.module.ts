import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
// import { apiModule } from '';
import { join } from 'path';
import { ApiModule } from './api.module';

@Module({
  imports: [
    ApiModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: true,
      playground: true,
    }),
  ],
})
export class ApplicationModule {}

import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Repository {
  @Field()
  name: string;

  @Field()
  html_url: string;

  @Field()
  description: string;

  @Field(() => Int)
  stargazers_count: number;

  @Field(() => Int)
  forks_count: number;

  @Field()
  language: string;
}

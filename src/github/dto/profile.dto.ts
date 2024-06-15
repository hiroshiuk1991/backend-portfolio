// src/github/dto/profile.dto.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Profile {
  @Field()
  login: string;

  @Field()
  avatar_url: string;

  @Field({ nullable: true })
  bio: string;

  @Field(() => Int)
  followers: number;

  @Field(() => Int)
  following: number;
}

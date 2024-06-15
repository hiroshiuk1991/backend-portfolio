// src/github/github.resolver.ts
import { Resolver, Query } from '@nestjs/graphql';
import { GithubService } from './github.service';
import { Profile } from './dto/profile.dto';

@Resolver()
export class GithubResolver {
  constructor(private readonly githubService: GithubService) {}

  @Query(() => Profile)
  async profile() {
    const githubProfile = await this.githubService.getProfile();

    const profile: Profile = {
      login: githubProfile.login,
      avatar_url: githubProfile.avatar_url,
      bio: githubProfile.bio || '',
      followers: githubProfile.followers,
      following: githubProfile.following,
    };

    return profile;
  }
}

import { Resolver, Query } from '@nestjs/graphql';
import { GithubService } from './github.service';
import { Profile } from './dto/profile.dto';
import { Repository } from './dto/repository.dto';

@Resolver()
export class GithubResolver {
  constructor(private readonly githubService: GithubService) {}

  @Query(() => Profile)
  async profile() {
    return this.githubService.getProfile();
  }

  @Query(() => [Repository])
  async repositories() {
    return this.githubService.getRepos();
  }
}

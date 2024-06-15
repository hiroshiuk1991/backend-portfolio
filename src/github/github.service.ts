import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  private readonly GITHUB_API_URL = 'https://api.github.com';
  private readonly TOKEN = 'your_github_personal_access_token';

  async getProfile() {
    const response = await axios.get(`${this.GITHUB_API_URL}/user`, {
      headers: { Authorization: `token ${this.TOKEN}` },
    });
    return response.data;
  }

  async getRepos() {
    const response = await axios.get(`${this.GITHUB_API_URL}/user/repos`, {
      headers: { Authorization: `token ${this.TOKEN}` },
    });
    return response.data;
  }
}

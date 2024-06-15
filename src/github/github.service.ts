// src/github/github.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GithubService {
  private readonly GITHUB_API_URL = 'https://api.github.com';
  private readonly TOKEN = process.env.GITHUB_TOKEN;

  async getProfile() {
    try {
      const response = await axios.get(`${this.GITHUB_API_URL}/user`, {
        headers: { Authorization: `token ${this.TOKEN}` },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }

  async getRepos() {
    try {
      const response = await axios.get(`${this.GITHUB_API_URL}/user/repos`, {
        headers: { Authorization: `token ${this.TOKEN}` },
      });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
}

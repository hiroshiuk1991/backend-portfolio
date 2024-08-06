import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly users = [
    {
      userId: 1,
      username: 'test',
      password: process.env.PASSWORD,
    },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    this.logger.debug(`Validating user: ${username}`);

    const user = this.users.find(
      (user) => user.username === username && user.password === password,
    );
    if (user) {
      const { password, ...result } = user;
      this.logger.debug(`User validated: ${username}`);

      return result;
    }
    this.logger.debug(`User validation failed: ${username}`);
    return null;
  }

  async login(loginDto: LoginDto) {
    this.logger.debug(`Login attempt for user: ${loginDto.username}`);
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      this.logger.error(`Login failed for user: ${loginDto.username}`);
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, sub: user.userId };
    this.logger.debug(`Login successful for user: ${loginDto.username}`);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

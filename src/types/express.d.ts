import { Request } from 'express';
import { User } from '../auth/user.entity';

declare module 'express' {
  export interface Request {
    user?: User;
  }
}

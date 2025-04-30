import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login() {
    return 'SignIn function';
  }

  signup() {
    return { msg: 'SignUp function as a service' };
  }
}

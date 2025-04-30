import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // Decorator
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup() {
    // call the function from auth service
    return this.authService.signup();
  }

  @Post('signin')
  signin() {
    // call the function from auth service
    return this.authService.login();
  }
}

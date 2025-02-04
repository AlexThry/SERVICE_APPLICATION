import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from '@app/dtos/auth/auth.dto';
import { AuthGuard } from './auth.guard';
import { Public } from './public';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto)
  }
  
  @Public()
  @Post('register')
  @HttpCode(HttpStatus.OK)
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto)
  }

  @UseGuards(AuthGuard)
  @Get('prout')
  prout() {
    return 'prout'
  }
}

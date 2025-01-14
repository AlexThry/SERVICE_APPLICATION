import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { AUTH_PATTERN } from '@app/contracts/auth.pattern';
import { LoginDto, RegisterDto } from '@app/dtos/auth/auth.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern(AUTH_PATTERN.LOGIN)
  login(@Payload() payload: {loginDto: LoginDto}) {
    const {loginDto} = payload;
    return this.authService.login(loginDto.username, loginDto.password)
  }

  @MessagePattern(AUTH_PATTERN.REGISTER)
  register(@Payload() payload: {registerDto: RegisterDto}) {
    const {registerDto} = payload;
    return this.authService.register(registerDto.email, registerDto.username, registerDto.password, registerDto.firstName, registerDto.lastName)
  }
  
}

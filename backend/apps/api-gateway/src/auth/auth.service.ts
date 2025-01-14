import { AUTH_PATTERN } from '@app/contracts/auth.pattern';
import { LoginDto, RegisterDto } from '@app/dtos/auth/auth.dto';
import { ConflictException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {

  constructor(@Inject('USERS_CLIENT') private userClient: ClientProxy, private jwtService: JwtService) {}
  
  async login(loginDto: LoginDto) {
    const user = await this.userClient.send(AUTH_PATTERN.LOGIN, { loginDto }).toPromise();
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    
    const payload = { sub: user._id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user._id
    };
  }

  async register(registerDto: RegisterDto) {
    const user = await this.userClient.send(AUTH_PATTERN.REGISTER, { registerDto }).toPromise();

    if (!user) {
      return new ConflictException('User already exist')
    }

    return user;
  }
}

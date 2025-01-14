import { User, UserDocument } from '@app/dtos/users/user.schema';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '@app/dtos/users/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private userService: UsersService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.userModel.findOne({ username, password }).exec();
    if (!user) {
      return false;
    }
    return user;
  }

  async register(email: string, username: string, password: string, firstName: string, lastName: string) {
    const user = await this.userModel.findOne({ email }).exec();
    if (user) {
      return;
    }
    const newUser: CreateUserDto = {email, username, password, firstName, lastName}
    return this.userService.create(newUser)
  }
}

import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { USERS_PATTERN } from '@app/contracts/users.pattern';
import { CreateUserDto } from '@app/dtos/users/create-user.dto';
import { UpdateUserDto } from '@app/dtos/users/update-user.dto';

@Injectable()
export class UsersService {

  constructor(@Inject('USERS_CLIENT') private userClient: ClientProxy) {}

  create(createUserDto: CreateUserDto) {
    return this.userClient.send(USERS_PATTERN.CREATE, {createUserDto});
  }

  findAll() { 
    return this.userClient.send(USERS_PATTERN.FIND_ALL, {});
  }

  findOne(id: string) {
    return this.userClient.send(USERS_PATTERN.FIND_ONE, id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userClient.send(USERS_PATTERN.UPDATE, {
      id,
      ...updateUserDto
    });
  }

  remove(id: string) {
    return this.userClient.send(USERS_PATTERN.REMOVE, id);
  }
}

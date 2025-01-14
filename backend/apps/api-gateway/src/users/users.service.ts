import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from '../../../../libs/dtos/src/users/create-user.dto';
import { UpdateUserDto } from '../../../../libs/dtos/src/users/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { USERS_PATTERN } from '@app/contracts/users.pattern';

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

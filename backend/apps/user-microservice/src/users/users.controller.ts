import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from '@app/dtos/users/create-user.dto';
import { UpdateUserDto } from '@app/dtos/users/update-user.dto';
import { USERS_PATTERN } from '@app/contracts/users.pattern';


@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(USERS_PATTERN.CREATE)
  create(@Payload() payload: { createUserDto: CreateUserDto }) {

    // On récupère l'objet dans le payload
    const { createUserDto } = payload;
    
    return this.usersService.create(createUserDto);
  }

  @MessagePattern(USERS_PATTERN.FIND_ALL)
  findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern(USERS_PATTERN.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.usersService.findOne(id);
  }

  @MessagePattern(USERS_PATTERN.UPDATE)
  update(@Payload() payload: {updateUserDto: UpdateUserDto}) {
    const {updateUserDto} = payload
    return this.usersService.update(updateUserDto._id, updateUserDto);
  }

  @MessagePattern(USERS_PATTERN.REMOVE)
  remove(@Payload() id: string) {
    return this.usersService.remove(id);
  }
}

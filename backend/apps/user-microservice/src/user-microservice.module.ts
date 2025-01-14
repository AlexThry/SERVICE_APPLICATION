import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './user-microservice.controller';
import { UserMicroserviceService } from './user-microservice.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, AuthModule, MongooseModule.forRoot('mongodb+srv://alexist103:laS31WAxFPpgAjxV@soaproject.c2z5s.mongodb.net/?retryWrites=true&w=majority&appName=SOAProject')],
  controllers: [UserMicroserviceController],
  providers: [UserMicroserviceService],
})
export class UserMicroserviceModule {}

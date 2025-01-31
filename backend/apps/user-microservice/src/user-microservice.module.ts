import { Module } from '@nestjs/common';
import { UserMicroserviceController } from './user-microservice.controller';
import { UserMicroserviceService } from './user-microservice.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        UsersModule,
        AuthModule,
        MongooseModule.forRoot(
            'mongodb://mongo:27017/',
        ),
    ],
    controllers: [UserMicroserviceController],
    providers: [UserMicroserviceService],
})
export class UserMicroserviceModule {}

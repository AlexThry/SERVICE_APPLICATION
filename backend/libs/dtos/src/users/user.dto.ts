import { IsString, IsEmail, Length, IsMongoId } from 'class-validator';

export class UserDto {
    @IsMongoId()
    _id: string;

    @IsString()
    @Length(3, 20)
    username: string;

    @IsString()
    @Length(3, 20)
    firstName: string;

    @IsString()
    @Length(3, 20)
    lastName: string;

    @IsString()
    @Length(8, 30)
    password: string;
    
    @IsEmail()
    @Length(5, 320)
    email: string;

    @IsString()
    @Length(4, 5)
    role?: 'admin' | 'user';
}
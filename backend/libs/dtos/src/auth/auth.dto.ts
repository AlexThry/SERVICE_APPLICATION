import { IsEmail, IsString } from "class-validator";

export class LoginDto {
    @IsString()
    username: string;

    @IsString()
    password: string;
}

export class RegisterDto {
    @IsEmail()
    email: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;
}
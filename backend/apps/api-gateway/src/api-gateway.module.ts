import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { NotesModule } from './notes/notes.module';
import { ChatModule } from './chat/chat.module';
import * as fs from 'fs';
import * as yaml from 'js-yaml';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';

const configPath = process.env.CONF_PATH || '../conf.yml';
const config = yaml.load(fs.readFileSync(configPath, 'utf8'));

const jwtSecret = config.jwtSecret;

@Module({
    imports: [
        UsersModule,
        AuthModule,
        JwtModule.register({
            global: true,
            secret: jwtSecret,
            signOptions: { expiresIn: '3600s' },
        }),
        NotesModule,
        ChatModule,
    ],
    controllers: [ApiGatewayController],
    providers: [
        ApiGatewayService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        },
    ],
})
export class ApiGatewayModule {}

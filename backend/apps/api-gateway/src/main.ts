import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { AuthGuard } from './auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  app.enableCors({
    origin: '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }); 

  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.port ?? 3000);
}
bootstrap();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}

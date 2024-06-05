import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user';
import { UpdateUserDto } from './dto/update-user';

import { UsersService } from './users.service';
import { Role } from './types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // Get users
  findAll(@Query('role') role?: Role) {
    return this.usersService.findAll(role);
  }

  @Post() // Create user
  create(@Body(ValidationPipe) createUSerDto: CreateUserDto) {
    return this.usersService.create(createUSerDto);
  }

  @Get(':id') // Get user by id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id') // Update user by id
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updatedUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updatedUserDto);
  }

  @Delete(':id') // Delete user by id
  remove(@Param('id') id: string) {
    return this.usersService.delete(id);
  }
}

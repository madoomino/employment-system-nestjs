import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces';
import { Role } from './types';
import { CreateUserDto } from './dto/create-user';
import { UpdateUserDto } from './dto/update-user';

@Injectable()
export class UsersService {
  users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'test1@gmail.com',
      role: 'ADMIN',
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'test2@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: '3',
      name: 'Alice',
      email: 'test3@gmail.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: Role): User[] {
    if (role) {
      const foundUsers = this.users.filter((user) => user.role === role);
      if (!foundUsers.length)
        throw new NotFoundException('role is not valid');
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  create(createUserDto: CreateUserDto) {
    if (!createUserDto.email || !createUserDto.name) return 'Missing fields.';
    const createdUser = { id: String(Date.now()), ...createUserDto };
    this.users.push(createdUser);
    return createdUser;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: string) {
    const removedUser = this.users.find((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}

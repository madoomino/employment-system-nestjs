import { Role, RoleEnum } from '../types';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsEnum(RoleEnum, {
    message: 'Valid role required',
  })
  role: Role;
}

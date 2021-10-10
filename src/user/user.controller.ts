import { UserRequestDto } from './dto/user.request.dto';
import { HttpExceptionFilter } from './../common/exceptions/http-exception.filter';
import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { UserService } from './user.service';

@Controller('user')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getCurrentUser() {
    return 'current user';
  }

  @Post()
  async signUp(@Body() body: UserRequestDto) {
    return this.UserService.Signup;
  }

  @Post('login')
  logIn() {
    return 'login';
  }
}

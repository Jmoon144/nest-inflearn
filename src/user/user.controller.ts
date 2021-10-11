import { UserService } from './user.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { UserRequestDto } from './dto/user.request.dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signup')
  signUp(@Body(ValidationPipe) userRequestDto: UserRequestDto): Promise<void> {
    return this.userService.signUp(userRequestDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) userRequestDto: UserRequestDto,
  ): Promise<{ accessToken: string }> {
    return this.userService.signIn(userRequestDto);
  }
}

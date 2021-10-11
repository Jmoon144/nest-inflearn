import { UserRequestDto } from './dto/user.request.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  //회원가입
  async signUp(userRequestDto: UserRequestDto): Promise<void> {
    return this.userRepository.createUser(userRequestDto);
  }

  //로그인
  async signIn(
    userRequestDto: UserRequestDto,
  ): Promise<{ accessToken: string }> {
    const { name, password } = userRequestDto;
    const user = await this.userRepository.findOne({ name });

    if (user && (await bcrypt.compare(password, user.password))) {
      //유저 토큰 생성( secret + payload(중요한 정보x))
      const payload = { name };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}

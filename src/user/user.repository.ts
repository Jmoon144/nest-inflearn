import { User } from './user.entity';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import * as bcrypt from 'bcryptjs';
import { UserRequestDto } from './dto/user.request.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(userRequestDto: UserRequestDto): Promise<void> {
    const { name, password } = userRequestDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ name, password: hashedPassword });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }

    await this.save(user);
  }
}

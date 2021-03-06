import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from 'configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule],
})
export class AppModule {}

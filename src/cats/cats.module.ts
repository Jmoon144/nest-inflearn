import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  //외부에서 사용할 수 있게 내보내기
  exports: [CatsService],
})
export class CatsModule {}

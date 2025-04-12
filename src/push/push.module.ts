import { Module } from '@nestjs/common';
import { PushService } from './push.service';
import { PushController } from './push.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [PushController],
  providers: [PushService],
})
export class PushModule {}

import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PushModule } from './push/push.module';

@Module({
  imports: [UserModule, PushModule],
})
export class AppModule {}

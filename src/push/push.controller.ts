import { Body, Controller, Post } from '@nestjs/common';
import { PushService } from './push.service';
import { SendNowDto } from './dto/send-now.dto';
import { ScheduleDto } from './dto/schedule.dto';

@Controller('push')
export class PushController {
  constructor(private readonly pushService: PushService) {}

  @Post('send-now')
  sendNow(@Body() body: SendNowDto) {
    return this.pushService.sendNow(body);
  }

  @Post('schedule')
  schedule(@Body() body: ScheduleDto) {
    return this.pushService.schedule(body);
  }
}

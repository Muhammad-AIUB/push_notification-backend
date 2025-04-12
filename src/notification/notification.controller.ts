import { Controller, Post, Body, Query } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send-now')
  sendNow(@Body('message') message: string) {
    return this.notificationService.sendNow(message);
  }

  @Post('send-later')
  sendLater(@Body('message') message: string, @Query('delay') delay: number) {
    return this.notificationService.sendLater(message, delay);
  }
}

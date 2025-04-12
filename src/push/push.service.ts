import { Injectable, Logger } from '@nestjs/common';
import { SendNowDto } from './dto/send-now.dto';
import { ScheduleDto } from './dto/schedule.dto';
import { UserService } from 'src/user/user.service';
import { mockUsers } from '../user/mock-users';

@Injectable()
export class PushService {
  private readonly logger = new Logger(PushService.name);

  constructor(private readonly userService: UserService) {}

  sendNow(payload: SendNowDto) {
    const users = this.userService.getAllUsers();

    for (const user of users) {
      this.logger.log(`Sending NOW to ${user.name} (${user.deviceToken})`);
      this.logger.log(`Title: ${payload.title}`);
      this.logger.log(`Message: ${payload.message}`);
    }

    return { message: 'Notifications sent instantly!' };
  }

  schedule(payload: ScheduleDto) {
    const scheduleTime = new Date(payload.scheduleAt);
    const now = new Date();

    const delay = scheduleTime.getTime() - now.getTime();

    if (delay <= 0) {
      throw new Error('Schedule time must be in the future!');
    }

    setTimeout(() => {
      const users = this.userService.getAllUsers();
      for (const user of users) {
        this.logger.log(
          `Scheduled Delivery to ${user.name} (${user.deviceToken})`,
        );
        this.logger.log(`Title: ${payload.title}`);
        this.logger.log(`Message: ${payload.message}`);
      }
    }, delay);

    return { message: 'Notification scheduled successfully!' };
  }
}

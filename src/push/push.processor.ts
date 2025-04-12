import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';
import { ScheduleDto } from './dto/schedule.dto';
import { mockUsers } from '../user/mock-users';

@Processor('pushQueue')
export class PushProcessor {
  @Process('sendPush')
  handlePushJob(job: Job<ScheduleDto>) {
    const { title, message } = job.data;

    mockUsers.forEach((user) => {
      console.log(`[SCHEDULED] To ${user.name}: ${title} - ${message}`);
    });
  }
}

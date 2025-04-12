import { Job } from 'bull';
import { ScheduleDto } from './dto/schedule.dto';
export declare class PushProcessor {
    handlePushJob(job: Job<ScheduleDto>): void;
}

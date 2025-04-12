import { PushService } from './push.service';
import { SendNowDto } from './dto/send-now.dto';
import { ScheduleDto } from './dto/schedule.dto';
export declare class PushController {
    private readonly pushService;
    constructor(pushService: PushService);
    sendNow(body: SendNowDto): {
        message: string;
    };
    schedule(body: ScheduleDto): {
        message: string;
    };
}

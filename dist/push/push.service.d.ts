import { SendNowDto } from './dto/send-now.dto';
import { ScheduleDto } from './dto/schedule.dto';
import { UserService } from 'src/user/user.service';
export declare class PushService {
    private readonly userService;
    private readonly logger;
    constructor(userService: UserService);
    sendNow(payload: SendNowDto): {
        message: string;
    };
    schedule(payload: ScheduleDto): {
        message: string;
    };
}

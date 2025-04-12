import { PushService } from '../push.service';
export declare class NotificationCron {
    private readonly pushService;
    constructor(pushService: PushService);
    handleCron(): Promise<void>;
}

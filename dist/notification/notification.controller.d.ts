import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendNow(message: string): string;
    sendLater(message: string, delay: number): string;
}

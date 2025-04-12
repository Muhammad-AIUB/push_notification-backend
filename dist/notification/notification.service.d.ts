export declare class NotificationService {
    private readonly logger;
    sendNow(message: string): string;
    sendLater(message: string, delayInSeconds: number): string;
}

import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  sendNow(message: string): string {
    this.logger.log(`Notification sent immediately: ${message}`);
    return `✅ Notification sent: ${message}`;
  }

  sendLater(message: string, delayInSeconds: number): string {
    this.logger.log(
      `⏳ Notification scheduled after ${delayInSeconds} seconds`,
    );

    setTimeout(() => {
      this.logger.log(`🚀 Scheduled notification delivered: ${message}`);
    }, delayInSeconds * 1000);

    return `🕒 Notification scheduled in ${delayInSeconds} seconds`;
  }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var PushService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PushService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
let PushService = PushService_1 = class PushService {
    userService;
    logger = new common_1.Logger(PushService_1.name);
    constructor(userService) {
        this.userService = userService;
    }
    sendNow(payload) {
        const users = this.userService.getAllUsers();
        for (const user of users) {
            this.logger.log(`Sending NOW to ${user.name} (${user.deviceToken})`);
            this.logger.log(`Title: ${payload.title}`);
            this.logger.log(`Message: ${payload.message}`);
        }
        return { message: 'Notifications sent instantly!' };
    }
    schedule(payload) {
        const scheduleTime = new Date(payload.scheduleAt);
        const now = new Date();
        const delay = scheduleTime.getTime() - now.getTime();
        if (delay <= 0) {
            throw new Error('Schedule time must be in the future!');
        }
        setTimeout(() => {
            const users = this.userService.getAllUsers();
            for (const user of users) {
                this.logger.log(`Scheduled Delivery to ${user.name} (${user.deviceToken})`);
                this.logger.log(`Title: ${payload.title}`);
                this.logger.log(`Message: ${payload.message}`);
            }
        }, delay);
        return { message: 'Notification scheduled successfully!' };
    }
};
exports.PushService = PushService;
exports.PushService = PushService = PushService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService])
], PushService);
//# sourceMappingURL=push.service.js.map
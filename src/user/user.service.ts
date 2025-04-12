import { Injectable } from '@nestjs/common';
import { mockUsers } from './mock-users'; // ✅ ঠিকভাবে import করো

@Injectable()
export class UserService {
  getAllUsers() {
    return mockUsers; // ✅ mockUsers নামই ইউজ করো
  }
}

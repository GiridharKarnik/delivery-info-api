import { Injectable } from '@nestjs/common';

@Injectable()
export class CommsService {
  constructor() {}

  getNextDeliveryMessage(): string {
    return 'Hello World';
  }
}

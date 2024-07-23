import { Injectable } from '@nestjs/common';
import { NextDeliveryComms } from './interfaces/NextDeliveryComms.interface';
import { UsersService } from '../users/users.service';
import { generateCatNameMentions } from './utils/generateCatNameMentions';

@Injectable()
export class CommsService {
  constructor(private readonly usersService: UsersService) {}

  getNextDeliveryMessage(userId: string): NextDeliveryComms {
    const user = this.usersService.findUserById(userId);

    const catNameMentions = generateCatNameMentions(user.cats);

    return {
      title: 'Your next delivery for Maymie and Murphy',
      message:
        "Hey Tyra! In two days' time, we'll be charging you for your next order for Maymie and Murphy's fresh food.",
      totalPrice: '£71.25',
      freeGift: false,
    };
  }
}

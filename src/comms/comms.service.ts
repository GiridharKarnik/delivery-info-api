import { Injectable } from '@nestjs/common';
import { NextDeliveryComms } from './interfaces/NextDeliveryComms.interface';
import { UsersService } from '../users/users.service';
import { generateCatNameMentions } from './utils/generateCatNameMentions';
import { PricingService } from '../pricing/pricing.service';
import { calculateOrderPrice } from '../shared/utils/calculateOrderPrice';

@Injectable()
export class CommsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly pricingService: PricingService,
  ) {}

  getNextDeliveryMessage(userId: string): NextDeliveryComms {
    const user = this.usersService.findUserById(userId);

    const catNameMentions = generateCatNameMentions(user.cats);

    const pouchSizePriceMap = this.pricingService.getLatestPricing();
    const totalPrice = calculateOrderPrice(user.cats, pouchSizePriceMap);

    return {
      title: `Your next delivery for ${catNameMentions}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${catNameMentions}'s fresh food.`,
      totalPrice: `£${totalPrice}`,
      freeGift: false,
    };
  }
}

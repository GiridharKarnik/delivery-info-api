import { Injectable } from '@nestjs/common';
import { PouchSizePriceMap } from '../shared/interfaces/PouchSizePriceMap.interface';

@Injectable()
export class PricingService {
  getLatestPricing(): PouchSizePriceMap {
    return {
      A: 55.5,
      B: 59.5,
      C: 62.75,
      D: 66.0,
      E: 69.0,
      F: 71.25,
    };
  }
}

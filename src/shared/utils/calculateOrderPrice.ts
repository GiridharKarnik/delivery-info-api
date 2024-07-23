import { Cat } from '../interfaces/Cat.interface';
import { PouchSizePriceMap } from '../interfaces/PouchSizePriceMap.interface';

export function calculateOrderPrice(
  cats: Cat[],
  pouchSizePriceMap: PouchSizePriceMap,
): number {
  return cats
    .filter((cat) => cat.subscriptionActive)
    .reduce((total, cat) => total + pouchSizePriceMap[cat.pouchSize], 0);
}

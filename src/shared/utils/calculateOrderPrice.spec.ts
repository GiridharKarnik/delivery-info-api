import { PouchSizePriceMap } from '../interfaces/PouchSizePriceMap.interface';
import { Cat } from '../interfaces/Cat.interface';
import { calculateOrderPrice } from './calculateOrderPrice';

describe('calculateOrderPrice', () => {
  const pouchSizePriceMap: PouchSizePriceMap = {
    A: 55.5,
    B: 59.5,
    C: 62.75,
    D: 66.0,
    E: 69.0,
    F: 71.25,
  };

  it('returns 0 when there are no cats', () => {
    const cats: Cat[] = [];
    expect(calculateOrderPrice(cats, pouchSizePriceMap)).toBe(0);
  });

  it('returns 0 when no cats have an active subscription', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: false,
        breed: 'Persian',
        pouchSize: 'A',
      },
      {
        name: 'Whiskers',
        subscriptionActive: false,
        breed: 'Siamese',
        pouchSize: 'B',
      },
    ];
    expect(calculateOrderPrice(cats, pouchSizePriceMap)).toBe(0);
  });

  it('calculates the correct price for one active cat', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'A',
      },
    ];
    expect(calculateOrderPrice(cats, pouchSizePriceMap)).toBe(55.5);
  });

  it('calculates the correct price for multiple active cats', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'A',
      },
      {
        name: 'Whiskers',
        subscriptionActive: true,
        breed: 'Siamese',
        pouchSize: 'B',
      },
      {
        name: 'Tiger',
        subscriptionActive: false,
        breed: 'Bengal',
        pouchSize: 'C',
      },
    ];
    expect(calculateOrderPrice(cats, pouchSizePriceMap)).toBe(115.0);
  });

  it('calculates the correct price for all active cats', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'A',
      },
      {
        name: 'Whiskers',
        subscriptionActive: true,
        breed: 'Siamese',
        pouchSize: 'B',
      },
      {
        name: 'Tiger',
        subscriptionActive: true,
        breed: 'Bengal',
        pouchSize: 'C',
      },
      {
        name: 'Leo',
        subscriptionActive: true,
        breed: 'Maine Coon',
        pouchSize: 'D',
      },
    ];
    expect(calculateOrderPrice(cats, pouchSizePriceMap)).toBe(243.75);
  });

  it('returns 0 for invalid pouch sizes', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'Z',
      },
    ];
    expect(calculateOrderPrice(cats, pouchSizePriceMap)).toBe(NaN);
  });
});

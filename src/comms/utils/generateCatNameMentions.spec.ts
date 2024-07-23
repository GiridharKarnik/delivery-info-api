import { generateCatNameMentions } from './generateCatNameMentions';
import { Cat } from 'src/shared/interfaces/Cat.interface';

describe('generateCatNameMentions', () => {
  it('returns the cat name when there is one cat', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'M',
      },
    ];
    const expected = 'Fluffy';
    expect(generateCatNameMentions(cats)).toBe(expected);
  });

  it('returns "cat1 and cat2" when there are two cats', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'M',
      },
      {
        name: 'Whiskers',
        subscriptionActive: true,
        breed: 'Siamese',
        pouchSize: 'S',
      },
    ];
    const expected = 'Fluffy and Whiskers';
    expect(generateCatNameMentions(cats)).toBe(expected);
  });

  it('returns "cat1, cat2 and cat3" when there are three cats', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'M',
      },
      {
        name: 'Whiskers',
        subscriptionActive: true,
        breed: 'Siamese',
        pouchSize: 'S',
      },
      {
        name: 'Tiger',
        subscriptionActive: true,
        breed: 'Bengal',
        pouchSize: 'L',
      },
    ];
    const expected = 'Fluffy, Whiskers and Tiger';
    expect(generateCatNameMentions(cats)).toBe(expected);
  });

  it('returns "cat1, cat2, cat3 and cat4" when there are four cats', () => {
    const cats: Cat[] = [
      {
        name: 'Fluffy',
        subscriptionActive: true,
        breed: 'Persian',
        pouchSize: 'M',
      },
      {
        name: 'Whiskers',
        subscriptionActive: true,
        breed: 'Siamese',
        pouchSize: 'S',
      },
      {
        name: 'Tiger',
        subscriptionActive: true,
        breed: 'Bengal',
        pouchSize: 'L',
      },
      {
        name: 'Leo',
        subscriptionActive: true,
        breed: 'Maine Coon',
        pouchSize: 'L',
      },
    ];
    const expected = 'Fluffy, Whiskers, Tiger and Leo';
    expect(generateCatNameMentions(cats)).toBe(expected);
  });

  it('returns an empty string when there are no cats', () => {
    const cats: Cat[] = [];
    const expected = '';
    expect(generateCatNameMentions(cats)).toBe(expected);
  });
});

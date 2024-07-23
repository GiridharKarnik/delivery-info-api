import { Cat } from 'src/shared/interfaces/Cat.interface';

export function generateCatNameMentions(cats: Array<Cat>): string {
  const catNames = cats.map((cat) => cat.name);
  const noOfCats = catNames.length;

  if (noOfCats === 0) {
    return '';
  }

  if (noOfCats === 1) {
    return catNames[0];
  }

  const lastCatName = catNames.pop();

  return noOfCats > 0
    ? catNames.join(', ') + ' and ' + lastCatName
    : lastCatName!;
}

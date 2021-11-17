import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgCover } from '../utils/mockImages';

// ----------------------------------------------------------------------

const PRODUCT_NAME = ['Game Testing', 'Game Feedback', 'Bug Bounty'];

const PRODUCT_LINK = ['user','GameFeedback','']

const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

// ----------------------------------------------------------------------

const products = [...Array(3)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgCover(setIndex),
    name: PRODUCT_NAME[index],
    link: PRODUCT_LINK[index],
    price: faker.datatype.number({ min: 0, max: 500, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
    status: sample(['Unfinished', 'Finished', '', ''])
  };
});

export default products;

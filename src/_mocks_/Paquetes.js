import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgFeedback } from '../utils/mockImages';

// ----------------------------------------------------------------------

const PRODUCT_NAME = ['DATA', 'INFORMATION', 'SURVEY', 'KNOWLEDGE BASE', 'DATABASE', 'DATA MINING', 'PREMIUM', 'CUSTOM'];
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

const PRICEFeedback = [
  '$75',
  '$175',
  '$300',
  '$550',
  '$1350',
  '$2600',
  '$5000',
  'Custom',
];

const gamersFeed = [
  '10',
  '25',
  '50',
  '100',
  '250',
  '500',
  '1000',
  'You choose',
];

const times= [
  '1 Hour',
  '1 Hour',
  '1 Hour',
  '1 Hour',
  '1 Hour',
  '1 Hour',
  '1 Hour',
  'You choose',
];

// ----------------------------------------------------------------------

const products = [...Array(8)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgFeedback(setIndex),
    name: PRODUCT_NAME[index],
    price: PRICEFeedback[index],
    gamers: gamersFeed[index],
    time: times[index],  
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

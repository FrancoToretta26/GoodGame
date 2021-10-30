import faker from 'faker';
import { sample } from 'lodash';
// utils
import { mockImgAvatar } from '../utils/mockImages';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Gabriel Laporte',
  'Federico Calciano',
  'Juan Cruz Lafranconi',
  'Martin Castilla',
  'Reinaldo Barreto',
  'Gabriela Bohorquez',
  'Franco Toretta',
  'Federico Gelsi',
  'Jorge Gonzalez',
  'Federico Rodriguez',
  'Maria Fernandez',
  'Cristina Kim',
  'Jorge Barreto',
  'Marcos Perez',
  'Rodrigo Garcia',
  'Pablo Mamani',
  'Fernando McAllister',
  'Washington Tabarez',
  'Eleonora Tabarez',
  'Fernanda Villa',
  'Ricardo Perez Carmona',
  'Franco Nerez',
  'Roman Quispe',
  'Roberto Flores'
];

const COUNTRY = [
  'Argentina',
  'Argentina',
  'Argentina',
  'Argentina',
  'Argentina',
  'Argentina',
  'Argentina',
  'Argentina',
  'Argentina',
  'Peru',
  'Bolivia',
  'Paraguay',
  'Venezuela',
  'Uruguay',
  'Colombia',
  'Ecuador',
  'Peru',
  'Bolivia',
  'Paraguay',
  'Venezuela',
  'Uruguay',
  'Colombia',
  'Ecuador',
  'Colombia'
];

const PRICE = [
  '$5.5',
  '$6.5',
  '$5.3',
  '$5.1',
  '$6.3',
  '$6.7',
  '$5.8',
  '$5.8',
  '$5.9',
  '$6.8',
  '$7.5',
  '$8.3',
  '$10.2',
  '$9.7',
  '$7',
  '$8.1',
  '$10',
  '$11',
  '$10.5',
  '$7.5',
  '$14.6',
  '$15',
  '$12.3',
  '$13.5',
  '$13'
];

const SENIORITY = [
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Junior-Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester',
  'Senior-Tester'
];

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: PRODUCT_NAME[index],
  company: COUNTRY[index],
  price: PRICE[index],
  status: sample(['Available', 'Not available']),
  role: SENIORITY[index]
}));

export default users;

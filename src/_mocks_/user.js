import * as React from 'react';
import faker from 'faker';
import { sample } from 'lodash';
// utils
import { Icon } from '@iconify/react';
import { mockImgAvatar } from '../utils/mockImages';
import { TableCell, Typography } from '@mui/material';
import InputSpinner from 'react-bootstrap-input-spinner' 
import TextFieldSelect from '../components/TextFieldSelect';
import MenuItem from '@mui/material/MenuItem';

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
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Junior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Semi-Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester',
  'Senior Tester'
];

const ESTRELLAS = [
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>,
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>, 
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>,  
<TableCell padding="none" align='center'>
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
<Icon icon="noto:star" width="18" height="18"/> 
</TableCell>,  

];



const HOURS = [
  <TableCell padding="none" align='center'>
  <TextFieldSelect/>
  </TableCell>,
  <TableCell padding="none" align='center'>
   <TextFieldSelect/>
  </TableCell>,
  <TableCell padding="none" align='center'>
  <TextFieldSelect/>
 </TableCell>,
  <TableCell padding="none" align='center'>
  <TextFieldSelect/>
 </TableCell>,
  <TableCell padding="none" align='center'>
  <TextFieldSelect/>
 </TableCell>,
   <TableCell padding="none" align='center'>
   <TextFieldSelect/>
  </TableCell>,
    <TableCell padding="none" align='center'>
    <TextFieldSelect/>
   </TableCell>,
     <TableCell padding="none" align='center'>
     <TextFieldSelect/>
    </TableCell>,
      <TableCell padding="none" align='center'>
      <TextFieldSelect/>
     </TableCell>,
       <TableCell padding="none" align='center'>
       <TextFieldSelect/>
      </TableCell>,
        <TableCell padding="none" align='center'>
        <TextFieldSelect/>
       </TableCell>,
        <TableCell padding="none" align='center'>
        <TextFieldSelect/>
       </TableCell>,
         <TableCell padding="none" align='center'>
         <TextFieldSelect/>
        </TableCell>,
          <TableCell padding="none" align='center'>
          <TextFieldSelect/>
         </TableCell>,
           <TableCell padding="none" align='center'>
           <TextFieldSelect/>
          </TableCell>,
            <TableCell padding="none" align='center'>
            <TextFieldSelect/>
           </TableCell>,
             <TableCell padding="none" align='center'>
             <TextFieldSelect/>
            </TableCell>,
              <TableCell padding="none" align='center'>
              <TextFieldSelect/>
             </TableCell>,
               <TableCell padding="none" align='center'>
               <TextFieldSelect/>
              </TableCell>,
                <TableCell padding="none" align='center'>
                <TextFieldSelect/>
               </TableCell>,
                 <TableCell padding="none" align='center'>
                 <TextFieldSelect/>
                </TableCell>,
                  <TableCell padding="none" align='center'>
                  <TextFieldSelect/>
                 </TableCell>,
                   <TableCell padding="none" align='center'>
                   <TextFieldSelect/>
                  </TableCell>,
                    <TableCell padding="none" align='center'>
                    <TextFieldSelect/>
                   </TableCell>,
]


const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: PRODUCT_NAME[index],
  company: COUNTRY[index],
  price: PRICE[index],
  status: sample(['Available', 'Not available']),
  role: SENIORITY[index],
  estrellas: ESTRELLAS[index],
  hours: HOURS[index],
  genre: sample(['Action', 'Adventure', 'Adventure', 'Role', 'Simulation','Strategy','Sports','MMO'])
}));

export default users;

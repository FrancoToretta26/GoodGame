import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '0',
  },
  {
    value: 'EUR',
    label: '1',
  },
  {
    value: 'BTC',
    label: '2',
  },
  {
    value: 'JPY',
    label: '3',
  },
  {
    value: 'JPY',
    label: '4',
  },
  {
    value: 'JPY',
    label: '5',
  },
  {
    value: 'JPY',
    label: '6',
  },
];

export default function SelectTextFields() {
  const [currency, setCurrency] = React.useState('USD');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 0, width: '8ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          value={currency}
          onChange={handleChange}
          size='small'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}

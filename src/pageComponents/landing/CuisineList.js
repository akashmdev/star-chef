import * as React from 'react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { useState } from 'react';

let list = [
  'Italian',
  'Indian',
  'Chinese',
  'Japanese',
  'Thighs',
  'Pork',
  'Beef',
  'Lamb',
  'Chicken',
  'Fish',
  'Vegetarian',
  'Vegan',
];

const CuisineList = () => {
  const [selected, setSelected] = useState('Italian');
  const handleClick = (item) => {
    setSelected(item);
  };
  return (
    <Box
      sx={{
        whiteSpace: 'nowrap',
        overflowX: 'auto',
        overflowY: 'hidden',
        marginX: 2,
        marginBottom: 1,
      }}
    >
      {list.map((item) => (
        <Chip
          color={selected === item ? 'primary' : 'default'}
          key={item}
          label={item}
          onClick={() => handleClick(item)}
          sx={{
            marginX: 0.5,
            fontSize: '12px',
            color: 'text.secondary',
            ...(selected === item && {
              color: 'primary.main',
            }),
          }}
          variant="outlined"
        />
      ))}
    </Box>
  );
};

export default CuisineList;

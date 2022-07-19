import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';

const MenuBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Button
        color={'inherit'}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          textTransform: 'none',
          fontSize: '18px',
          fontWeight: '700',
          marginLeft: '-8px',
        }}
      >
        {'Recommended'}
      </Button>
      <Button
        sx={{
          color: '#ffffff',
          background: '#000000',
          '&:hover': {
            background: '#000000',
          },
          textTransform: 'none',
          fontSize: '12px',
          fontWeight: '700',
          boxShadow: '0px 3px 4px #00000029',
          borderRadius: 3,
        }}
      >
        {'Menu'}
      </Button>
    </Box>
  );
};

export default MenuBar;

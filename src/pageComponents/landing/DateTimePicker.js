import * as React from 'react';
import Button from '@mui/material/Button';
import DateSelect from '../../assets/date-select.svg';
import Box from '@mui/material/Box';
import TimeSelect from '../../assets/time-select.svg';

const DateTimePicker = () => {
  return (
    <Box
      sx={{
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 1px 4px #D6D6D69E',
        borderRadius: '9px',
        opacity: 1,
        margin: 2.5,
        padding: 2,
        marginTop: -2.5,
        display: 'flex',
        justifyContent: 'space-between',
        overflowY: 'hidden',
        height: '68.5px',
      }}
    >
      <Button
        color={'inherit'}
        // eslint-disable-next-line @next/next/no-img-element
        startIcon={<img alt={'DateSelect'} height={'16px'} src={DateSelect} width={'16px'} />}
        sx={{
          fontSize: '14px',
          fontWeight: 700,
          textTransform: 'none',
        }}
      >
        {'21 May 2021'}
      </Button>
      <Box sx={{ borderRight: '0.5px solid #dcdcdc' }} />
      <Button
        color={'inherit'}
        // eslint-disable-next-line @next/next/no-img-element
        startIcon={<img alt={'TimeSelect'} height={'16px'} src={TimeSelect} width={'16px'} />}
        sx={{
          fontSize: '14px',
          fontWeight: 700,
          textTransform: 'none',
        }}
      >
        {'10:30 Pm-12:30 Pm'}
      </Button>
    </Box>
  );
};

export default DateTimePicker;

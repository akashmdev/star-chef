import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LeftArrow from '../../assets/left-arrow.svg';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import DateTimePicker from './DateTimePicker';
import CuisineList from './CuisineList';
import PopularDishes from './PopularDishes';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';

const TopBar = ({ popularDishes, loading }) => {
  return (
    <AppBar color={'inherit'} elevation={0}>
      <Container disableGutters maxWidth="sm">
        <Box alignItems={'center'} display={'flex'} m={2}>
          <IconButton>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'LeftArrow'} height={'12px'} src={LeftArrow} width={'8px'} />
          </IconButton>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: '18px',
              marginLeft: '10px',
            }}
          >
            {'Select Dishes'}
          </Typography>
        </Box>
        <Box sx={{ background: '#000000', padding: 2.5 }} />
        <DateTimePicker />
        <CuisineList />
        <PopularDishes loading={loading} popularDishes={popularDishes} />
      </Container>
    </AppBar>
  );
};

TopBar.propTypes = {
  popularDishes: PropTypes.array,
  loading: PropTypes.bool,
};

export default TopBar;

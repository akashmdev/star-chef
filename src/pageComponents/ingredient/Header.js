import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';

const Header = ({ loading, ingredient }) => {
  return (
    <Box mt={7} p={2.5}>
      <Box alignItems={'center'} display={'flex'}>
        {loading ? (
          <Skeleton height={'42px'} width={'200px'} />
        ) : (
          <Typography
            sx={{
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            {ingredient?.name || '---'}
          </Typography>
        )}
        {loading ? (
          <Skeleton height={'25px'} sx={{ marginLeft: 2 }} width={'40px'} />
        ) : (
          <Box
            sx={{
              marginLeft: 2,
              padding: '1px 6px',
              background: '#51C452',
              borderRadius: 1,
              color: '#ffffff',
              fontSize: '9px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {'4.3'}
            <StarIcon sx={{ height: '10px', fontSize: '10px', marginLeft: '2px' }} />
          </Box>
        )}
      </Box>
      {loading ? (
        new Array(3)
          .fill(0)
          .map((_, index) => <Skeleton height={'20px'} key={Math.random()} width={300 - 70 * index} />)
      ) : (
        <Typography
          sx={{
            fontSize: '10px',
            color: '#8E8E8E',
            maxWidth: '220px',
            marginTop: 1,
            lineHeight: '18px',
          }}
        >
          {
            'Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.'
          }
        </Typography>
      )}
    </Box>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
  ingredient: PropTypes.object,
};
export default Header;

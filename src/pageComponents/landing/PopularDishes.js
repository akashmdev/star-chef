import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar, Skeleton } from '@mui/material';
import PropTypes from 'prop-types';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

const PopularDishes = ({ popularDishes, loading }) => {
  // const [popularDishes, setPopularDishes] = useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
  //     .then((res) => {
  //       if (res) {
  //         setPopularDishes(res.data.popularDishes);
  //         setLoading(false);
  //       }
  //     })
  //     .catch(() => {
  //       setLoading(false);
  //     });
  // }, []);
  return (
    <React.Fragment>
      <Typography sx={{ fontSize: '16px', fontWeight: 700, marginX: 2.5, marginY: 2 }}>{'Popular Dishes'}</Typography>
      <Box
        sx={{
          whiteSpace: 'nowrap',
          overflowX: 'auto',
          overflowY: 'hidden',
          marginX: 2,
          marginBottom: 2,
          display: 'flex',
        }}
      >
        {popularDishes.length
          ? popularDishes.map((item) => (
              <Box
                key={item.name}
                sx={{
                  marginX: 0.5,
                  borderRadius: 50,
                  border: '1px solid #FF941A',
                  position: 'relative',
                  cursor: 'pointer',
                }}
              >
                <Avatar
                  src={item.image || null}
                  sx={{
                    height: '65px',
                    width: '65px',
                    mixBlendMode: 'multiply',
                    border: '2px solid #ffffff',
                  }}
                  variant="outlined"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    borderRadius: 50,
                    background: '#1C1C1C9A',
                    width: '100%',
                    height: '100%',
                    border: '2px solid #ffffff',
                  }}
                />
                <Typography
                  align={'center'}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontWeight: 500,
                    fontSize: '12px',
                    color: '#ffffff',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    width: '49px',
                  }}
                >
                  {item?.name || ''}
                </Typography>
              </Box>
            ))
          : loading
          ? new Array(4).fill(0).map(() => (
              <Box
                key={Math.random()}
                sx={{
                  marginX: 0.5,
                }}
              >
                <Skeleton height={66} variant="circular" width={66} />
              </Box>
            ))
          : ''}
      </Box>
    </React.Fragment>
  );
};

PopularDishes.propTypes = {
  popularDishes: PropTypes.array,
  loading: PropTypes.bool,
};

export default PopularDishes;

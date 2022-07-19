import * as React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Vegan from '../../assets/vegan.svg';
import Equipment from '../../assets/equipment.svg';
import Button from '@mui/material/Button';
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from 'next/router';

const DishCard = ({ dish }) => {
  const Router = useRouter();
  return (
    <Box
      sx={{
        paddingY: 2,
        borderBottom: '1px solid #00000017',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Box alignItems={'center'} display={'flex'}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '600',
              marginRight: 1,
            }}
          >
            {dish.name}
          </Typography>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={Vegan} height={'12px'} src={Vegan} width={'12px'} />
          <Box
            sx={{
              marginLeft: 1,
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
            {dish?.rating || '0.0'}
            <StarIcon sx={{ height: '10px', fontSize: '10px', marginLeft: '2px' }} />
          </Box>
        </Box>
        <Box alignItems={'center'} display={'flex'} my={1}>
          {dish.equipments.map((equipment) => (
            <Box
              alignItems={'center'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              key={equipment}
              my={1}
              pr={2}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={Equipment} height={'17px'} src={Equipment} width={'12px'} />
              <Typography sx={{ fontSize: '8px' }}>{equipment}</Typography>
            </Box>
          ))}
          <Button
            onClick={() => {
              Router.push(`/ingredient/${dish.id}`);
            }}
            sx={{
              padding: '0px 20px',
              textTransform: 'none',
              flexDirection: 'column',
              borderRadius: '0px',
              borderLeft: '1px solid #e4e4e4',
              height: '30px',
              alignItems: 'start',
            }}
          >
            <Typography sx={{ fontSize: '10px', color: '#000000', fontWeight: 700 }}>{'Ingredients'}</Typography>
            <Typography sx={{ fontSize: '9px', fontWeight: 700 }}>{'View List  '}</Typography>
          </Button>
        </Box>
        <Typography
          sx={{
            fontColor: '#868686',
            fontSize: '12px',
            maxWidth: '210px',
            fontWeight: '500',
          }}
        >
          {dish.description || '---'}
        </Typography>
      </Box>
      <Box alignItems={'center'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
        <Box
          sx={{
            width: '110px',
            height: '80px',
            backgroundImage: `url(${dish.image})`,
            backgroundSize: 'cover',
            borderRadius: '5px',
          }}
        />
        <Button
          sx={{
            textTransform: 'none',
            fontSize: '10px',
            p: 0.5,
            fontWeight: '700',
            boxShadow: '0px 3px 4px #00000029',
            marginTop: '-12px',
            background: '#ffffff',
            '&:hover': {
              background: '#ffffff',
            },
          }}
          variant={'outlined'}
        >
          {'Add'}
        </Button>
      </Box>
    </Box>
  );
};

DishCard.propTypes = {
  dish: PropTypes.object,
};

export default DishCard;

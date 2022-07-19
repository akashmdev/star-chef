import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EquipmentIMG from '../../assets/equipment.svg';

const Equipment = ({ loading, ingredient }) => {
  return (
    <React.Fragment>
      <Typography sx={{ fontSize: '18px', fontWeight: 700, marginTop: 2 }}>{!loading && 'Appliances'}</Typography>
      <Box display={'flex'}>
        {ingredient?.ingredients?.appliances?.length &&
          ingredient?.ingredients?.appliances.map((each) => (
            <Box
              key={each.name}
              sx={{
                background: '#F5F5F5',
                width: '80px',
                height: '100px',
                borderRadius: '5px',
                marginTop: 2,
                marginRight: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt={'EquipmentIMG'} height={'54px'} src={EquipmentIMG} width={'28px'} />
              <Typography sx={{ fontSize: '10px', marginTop: 0.3 }}>{each.name}</Typography>
            </Box>
          ))}
      </Box>
    </React.Fragment>
  );
};

Equipment.propTypes = {
  loading: PropTypes.bool,
  ingredient: PropTypes.object,
};

export default Equipment;

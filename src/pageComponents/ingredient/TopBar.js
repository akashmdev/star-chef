import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import LeftArrow from '../../assets/left-arrow.svg';
import { useRouter } from 'next/router';

const TopBar = () => {
  const Router = useRouter();
  return (
    <AppBar color={'inherit'} elevation={0}>
      <Container disableGutters maxWidth="sm">
        <Box alignItems={'center'} display={'flex'} m={2}>
          <IconButton onClick={() => Router.back()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'LeftArrow'} height={'12px'} src={LeftArrow} width={'12px'} />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};

export default TopBar;

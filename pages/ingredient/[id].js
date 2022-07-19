import * as React from 'react';
import IngredientImg from '../../src/assets/ingredient.svg';
import Clock from '../../src/assets/clock.svg';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TopBar from '../../src/pageComponents/ingredient/TopBar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import Skeleton from '@mui/material/Skeleton';
import Header from '../../src/pageComponents/ingredient/Header';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Equipment from '../../src/pageComponents/ingredient/Equipment';

const Ingredient = () => {
  const Router = useRouter();
  const { id } = Router.query;
  const [ingredient, setIngredient] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (!id) return;
    axios
      .get(`https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`)
      .then((res) => {
        if (res) {
          setIngredient(res.data);
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <Container disableGutters maxWidth="sm" sx={{ background: '#fff' }}>
      <TopBar />
      <Header ingredient={ingredient} loading={loading} />
      <Box alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
        <Box alignItems={'center'} display={'flex'} p={2.5}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={'clock'} src={Clock} />
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 'bold',
              marginLeft: 1,
            }}
          >
            {loading ? <Skeleton width={'80px'} /> : ingredient?.timeToPrepare}
          </Typography>
        </Box>
        <Box
          sx={{
            marginTop: '-70px',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={'Ingredient'} height={'200px'} src={IngredientImg} width={'200px'} />
        </Box>
      </Box>
      <Box mt={-4} p={2.5}>
        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>
          {loading ? <Skeleton width={'100px'} /> : 'Ingredients'}
        </Typography>
        <Typography sx={{ fontSize: '10px', marginBottom: 2 }}>
          {loading ? <Skeleton height={'20px'} width={'80px'} /> : 'For 2 People'}
        </Typography>
        {/*<Box>*/}
        {ingredient
          ? Object.keys(ingredient.ingredients)
              .filter((e) => e !== 'appliances')
              .map((key) => (
                <Box
                  key={key}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    marginTop: 2,
                  }}
                >
                  <Button
                    color={'inherit'}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{
                      textTransform: 'capitalize',
                      fontSize: '14xpx',
                      fontWeight: '700',
                      marginLeft: '-8px',
                    }}
                  >
                    {`${key} (${ingredient.ingredients[key].length})`}
                  </Button>
                  <Box width={'100%'}>
                    {ingredient?.ingredients?.[key].length &&
                      ingredient?.ingredients?.[key].map((each) => (
                        <Box
                          display={'flex'}
                          justifyContent={'space-between'}
                          key={each.name}
                          sx={{
                            marginTop: 1,
                          }}
                          width={'100%'}
                        >
                          <Typography sx={{ fontSize: '12px' }}>{each.name}</Typography>
                          <Typography sx={{ fontSize: '12px' }}>
                            {isNaN(each.quantity) ? each.quantity : `${each.quantity} Ps`}
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                </Box>
              ))
          : ''}
        <Equipment ingredient={ingredient} loading={loading} />
      </Box>
    </Container>
  );
};

export default Ingredient;

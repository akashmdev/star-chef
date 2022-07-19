import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';
import TopBar from '../src/pageComponents/landing/TopBar';
import DishCard from '../src/pageComponents/landing/DishCard';
import MenuBar from '../src/pageComponents/landing/MenuBar';

export default function Index() {
  const [dishes, setDishes] = useState([]);
  const [popularDishes, setPopularDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
      .then((res) => {
        if (res) {
          setDishes(res.data.dishes);
          setPopularDishes(res.data.popularDishes);
          setLoading(false);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <Container disableGutters maxWidth="sm" sx={{ background: '#fff' }}>
      <TopBar loading={loading} popularDishes={popularDishes} />
      <Box sx={{ paddingTop: '345px' }}>
        <Box sx={{ padding: 2, background: '#ffffff' }}>
          <MenuBar />
          {dishes.length
            ? dishes.map((dish) => <DishCard dish={dish} key={dish.name} />)
            : loading
            ? new Array(4).fill(0).map(() => <Skeleton height={151} key={Math.random()} />)
            : ''}
        </Box>
      </Box>
    </Container>
  );
}

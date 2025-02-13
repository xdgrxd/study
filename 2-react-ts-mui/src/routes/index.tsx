import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard, PeopleDetail, PeopleListing } from '../pages';
import { Typography } from '@mui/material';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Home',
        icon: 'home',
        path: '/',
      },
      {
        label: 'People',
        icon: 'people',
        path: '/people',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cities" element={<PeopleListing />} />
      <Route path="/people/detail/:id" element={<PeopleDetail />} />
      <Route path="/people" element={<PeopleListing />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

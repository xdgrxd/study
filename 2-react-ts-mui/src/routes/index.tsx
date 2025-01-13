import { Routes, Route } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { CitiesListing, Dashboard } from '../pages';

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
        label: 'Cities',
        icon: 'apartment',
        path: '/cities',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cities" element={<CitiesListing />} />
      <Route path="/cities/detail/:id" element={<CitiesListing />} />
      {/* <Route path="*" element={<Navigate to="/home" />} /> */}
    </Routes>
  );
};

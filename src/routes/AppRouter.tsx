import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

import MoviesPage
  from '../pages/Movies/MoviesPage';

import MediaDetail
  from '../pages/MediaDetail/MediaDetail';

const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<MainLayout />}
        />

        <Route
          path="/movies"
          element={<MainLayout />}
        />

        <Route
          path="/movies/:id"
          element={<MainLayout />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';

const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* Página principal */}

        <Route
          path="/"
          element={<MainLayout />}
        />

        {/* Películas */}

        <Route
          path="/movies"
          element={<MainLayout />}
        />

        <Route
          path="/movies/:id"
          element={<MainLayout />}
        />

        {/* Spin-Offs */}

        <Route
          path="/spin-offs"
          element={<MainLayout />}
        />

        <Route
          path="/spin-offs/:id"
          element={<MainLayout />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;
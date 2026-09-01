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

        {/* Cortos */}

        <Route
          path="/shorts"
          element={<MainLayout />}
        />

        <Route
          path="/shorts/:id"
          element={<MainLayout />}  
        />

        {/* Cortos Spin-Offs */}
        <Route
          path="/spin-off-shorts"
          element={<MainLayout />}
        />

        <Route
          path="/spin-off-shorts/:id"
          element={<MainLayout />}
        />

        {/* Series */}
        <Route
          path="/series"
          element={<MainLayout />}
        />

        <Route
          path="/series/:id"
          element={<MainLayout />}
        />

        {/* Extras */}
        <Route
          path="/extras"
          element={<MainLayout />}
        />  

        <Route
          path="/extras/:id"
          element={<MainLayout />}
        />

        {/* Videojuegos */}
        <Route
          path="/video-games"
          element={<MainLayout />}
        />

      <Route
          path="/video-games/:id"
          element={<MainLayout />}
        />

        {/* Cómics */}
        <Route
          path="/comics"
          element={<MainLayout />}
        />

      <Route
          path="/comics/:id"
          element={<MainLayout />}
        />
        
      </Routes>

    </BrowserRouter>
  );
};

export default AppRouter;
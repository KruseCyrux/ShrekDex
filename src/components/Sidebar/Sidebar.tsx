import { Search } from 'lucide-react';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">

      <div className="widget search-widget">

        <h3>Buscar</h3>

        <div className="search-box">

          <Search size={19} />

          <input
            type="search"
            placeholder="Buscar en ShrekDex..."
            aria-label="Buscar en ShrekDex"
          />

        </div>

      </div>

      <div className="widget">

        <h3>Sobre el Proyecto</h3>

        <p>
          ShrekDex nace con la idea de recopilar
          y organizar todo el contenido existente
          relacionado con el universo de Shrek.
        </p>

        <p>
          El objetivo es construir una colección
          completa y fácil de explorar.
        </p>

      </div>

      <div className="widget">

        <h3>Próximos Aportes</h3>

        <ul>
          <li>ScoobyDex</li>
          <li>SlasherDex</li>
          <li>Fortress Files</li>
          <li>Excelsior Files</li>
          <li>CTRL+Game</li>
        </ul>

      </div>

      <div className="widget">

        <h3>Estadísticas</h3>

        <div className="statistics">

          <div>
            <span>Películas</span>
            <strong>0</strong>
          </div>

          <div>
            <span>Series</span>
            <strong>0</strong>
          </div>

          <div>
            <span>Videojuegos</span>
            <strong>0</strong>
          </div>

          <div>
            <span>Libros</span>
            <strong>0</strong>
          </div>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
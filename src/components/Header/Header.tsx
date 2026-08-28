import { Link } from 'react-router-dom';

import './Header.scss';

const sections = [
  {
    name: 'Películas',
    path: '/movies',
  },
  {
    name: 'Spin-Offs',
    path: '/spin-offs',
  },
  {
    name: 'Cortos',
    path: '/shorts',
  },
  {
    name: 'Cortos Spin-Offs',
    path: '/spin-off-shorts',
  },
  {
    name: 'Series',
    path: '/series',
  },
  {
    name: 'Extra',
    path: '/extra',
  },
  {
    name: 'Videojuegos',
    path: '/games',
  },
  {
    name: 'Cómics',
    path: '/comics',
  },
  {
    name: 'Libros',
    path: '/books',
  },
  {
    name: 'Música',
    path: '/music',
  },
];

const Header = () => {
  return (
    <header className="header">

      <div className="header-title">

        <h1>
          🧅 ShrekDex
        </h1>

        <span>
          (Colección Completa)
        </span>

      </div>

      <nav className="navigation">

        {sections.map((section) => (

          <Link
            key={section.name}
            to={section.path}
            className="navigation-button"
          >
            {section.name}
          </Link>

        ))}

      </nav>

    </header>
  );
};

export default Header;
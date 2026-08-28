import './Header.scss';

const sections = [
  'Películas',
  'Spin-Offs',
  'Cortos',
  'Cortos Spin-Offs',
  'Series',
  'Extra',
  'Videojuegos',
  'Cómics',
  'Libros',
  'Música',
];

const Header = () => {
  return (
    <header className="header">

      <div className="header-title">
        <h1>🧅 ShrekDex</h1>

        <span>
          (Colección Completa)
        </span>
      </div>

      <nav className="navigation">
        {sections.map((section) => (
          <button
            key={section}
            type="button"
          >
            {section}
          </button>
        ))}
      </nav>

    </header>
  );
};

export default Header;
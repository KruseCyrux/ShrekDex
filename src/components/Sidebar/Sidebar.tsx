import {
  Search,
} from 'lucide-react';

import {
  useEffect,
  useMemo,
  useState,
} from 'react';

import {
  useNavigate,
} from 'react-router-dom';

import movies from '../../data/movies.json';
import spinOffs from '../../data/spinOffs.json';
import shorts from '../../data/shorts.json';
import spinOffShorts from '../../data/spinOffShorts.json';
import series from '../../data/series.json';
import videoGames from '../../data/videoGames.json';
import extras from '../../data/extras.json';
import comics from '../../data/comics.json';
import books from '../../data/books.json';

import './Sidebar.scss';

interface SearchResult {
  id: string;
  title: string;
  year: number;
  type: string;
  category: string;
  path: string;
}

interface Statistic {
  label: string;
  count: number;
}

const Sidebar = () => {

  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] =
    useState('');

  const [
    animatedCounts,
    setAnimatedCounts,
  ] = useState<Record<string, number>>({});

  const searchData: SearchResult[] =
    useMemo(() => {

      return [

        ...movies.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Películas',
          path: `/movies/${item.id}`,
        })),

        ...spinOffs.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Spin-Offs',
          path: `/spin-offs/${item.id}`,
        })),

        ...shorts.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Cortos',
          path: `/shorts/${item.id}`,
        })),

        ...spinOffShorts.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Cortos Spin-Offs',
          path: `/spin-off-shorts/${item.id}`,
        })),

        ...series.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Series',
          path: `/series/${item.id}`,
        })),

        ...videoGames.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Videojuegos',
          path: `/video-games/${item.id}`,
        })),

        ...extras.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Extras',
          path: `/extras/${item.id}`,
        })),

        ...comics.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Cómics',
          path: `/comics/${item.id}`,
        })),

        ...books.map((item) => ({
          id: item.id,
          title: item.title,
          year: item.year,
          type: item.type,
          category: 'Libros',
          path: `/books/${item.id}`,
        })),

      ];

    }, []);

  const searchResults =
    useMemo(() => {

      const query =
        searchTerm.trim().toLowerCase();

      if (!query) {
        return [];
      }

      return searchData
        .filter((item) => {

          return (
            item.title
              .toLowerCase()
              .includes(query) ||

            item.type
              .toLowerCase()
              .includes(query) ||

            item.category
              .toLowerCase()
              .includes(query) ||

            String(item.year)
              .includes(query)
          );

        })
        .slice(0, 8);

    }, [
      searchTerm,
      searchData,
    ]);

  const statistics: Statistic[] =
    useMemo(() => [

      {
        label: 'Películas',
        count: movies.length,
      },

      {
        label: 'Spin-Offs',
        count: spinOffs.length,
      },

      {
        label: 'Cortos',
        count: shorts.length,
      },

      {
        label: 'Cortos Spin-Offs',
        count: spinOffShorts.length,
      },

      {
        label: 'Series',
        count: series.length,
      },

      {
        label: 'Videojuegos',
        count: videoGames.length,
      },

      {
        label: 'Extras',
        count: extras.length,
      },

      {
        label: 'Cómics',
        count: comics.length,
      },

      {
        label: 'Libros',
        count: books.length,
      },

    ], []);

  useEffect(() => {

    const animationFrameIds: number[] = [];

    statistics.forEach((statistic) => {

      const duration = 900;

      const startTime =
        performance.now();

      const animate = (
        currentTime: number
      ) => {

        const elapsed =
          currentTime - startTime;

        const progress =
          Math.min(
            elapsed / duration,
            1
          );

        const easedProgress =
          1 -
          Math.pow(
            1 - progress,
            3
          );

        const currentCount =
          Math.floor(
            statistic.count *
            easedProgress
          );

        setAnimatedCounts((previous) => ({
          ...previous,
          [statistic.label]: currentCount,
        }));

        if (progress < 1) {

          const frameId =
            requestAnimationFrame(
              animate
            );

          animationFrameIds.push(
            frameId
          );

        }

      };

      const frameId =
        requestAnimationFrame(
          animate
        );

      animationFrameIds.push(
        frameId
      );

    });

    return () => {

      animationFrameIds.forEach(
        (frameId) => {
          cancelAnimationFrame(
            frameId
          );
        }
      );

    };

  }, [statistics]);

  const handleSearchResult = (
    path: string
  ) => {

    setSearchTerm('');

    navigate(path);

  };

  return (
    <aside className="sidebar">

      <div className="widget search-widget">

        <h3>Buscar</h3>

        <div className="search-box">

          <Search size={19} />

          <input
            type="search"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(
                event.target.value
              )
            }
            placeholder="Buscar en ShrekDex..."
            aria-label="Buscar en ShrekDex"
          />

        </div>

        {searchTerm.trim() && (

          <div className="search-results">

            {searchResults.length > 0 ? (

              searchResults.map((result) => (

                <button
                  key={`${result.category}-${result.id}`}
                  type="button"
                  className="search-result"
                  onClick={() =>
                    handleSearchResult(
                      result.path
                    )
                  }
                >

                  <div className="search-result-info">

                    <strong>
                      {result.title}
                    </strong>

                    <span>
                      {result.category} · {result.year}
                    </span>

                  </div>

                  <span className="search-result-type">
                    {result.type}
                  </span>

                </button>

              ))

            ) : (

              <div className="search-no-results">

                <span>🔎</span>

                <p>
                  No encontramos contenido
                  relacionado con "{searchTerm}".
                </p>

              </div>

            )}

          </div>

        )}

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
          <li>Street FighterDex</li>
          <li>MF DOOM (Colección Completa)</li>
          <li>GundamDex</li>
          <li>QuakeDex</li>
        </ul>

      </div>

      <div className="widget">

        <h3>Estadísticas</h3>

        <div className="statistics">

          {statistics.map((statistic) => (

            <div
              key={statistic.label}
            >

              <span>
                {statistic.label}
              </span>

              <strong>
                {animatedCounts[statistic.label] ?? 0}
              </strong>

            </div>

          ))}

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;
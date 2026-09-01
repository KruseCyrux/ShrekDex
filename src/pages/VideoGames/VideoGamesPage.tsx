import { useMemo, useState } from 'react';

import videoGames from '../../data/videoGames.json';

import MediaCard from '../../components/MediaCard/MediaCard';

import './VideoGamesPage.scss';

type GameCategory =
  | 'todos'
  | 'principales'
  | 'carreras'
  | 'party'
  | 'miscelaneos'
  | 'educativos';

const categoryLabels: Record<GameCategory, string> = {
  todos: 'Todos',
  principales: 'Principales',
  carreras: 'Carreras',
  party: 'Party',
  miscelaneos: 'Misceláneos',
  educativos: 'Educativos',
};

const VideoGamesPage = () => {

  const [activeCategory, setActiveCategory] =
    useState<GameCategory>('todos');

  const filteredGames = useMemo(() => {

    if (activeCategory === 'todos') {
      return videoGames;
    }

    return videoGames.filter(
      (game) => game.gameCategory === activeCategory
    );

  }, [activeCategory]);

  const categoryCounts = useMemo(() => {

    return {
      todos: videoGames.length,

      principales: videoGames.filter(
        (game) => game.gameCategory === 'principales'
      ).length,

      carreras: videoGames.filter(
        (game) => game.gameCategory === 'carreras'
      ).length,

      party: videoGames.filter(
        (game) => game.gameCategory === 'party'
      ).length,

      miscelaneos: videoGames.filter(
        (game) => game.gameCategory === 'miscelaneos'
      ).length,

      educativos: videoGames.filter(
        (game) => game.gameCategory === 'educativos'
      ).length,
    };

  }, []);

  const categories: GameCategory[] = [
    'todos',
    'principales',
    'carreras',
    'party',
    'miscelaneos',
    'educativos',
  ];

  return (
    <section className="video-games-page">

      <div className="page-heading">

        <span>SHREKDEX</span>

        <h1>Videojuegos</h1>

        <p>
          Desde grandes aventuras hasta juegos de carreras,
          experiencias multijugador y títulos educativos,
          esta sección reúne los videojuegos relacionados
          con el universo de Shrek.
        </p>

      </div>


      <section className="games-category-selector">

        <div className="games-category-heading">

          <span>EXPLORA LA COLECCIÓN</span>

          <h2>
            Selecciona la categoría que te interese
          </h2>

          <p>
            Filtra los videojuegos según el tipo de
            experiencia que ofrecen.
          </p>

        </div>


        <div className="games-category-buttons">

          {categories.map((category) => (

            <button
              key={category}
              type="button"
              className={`games-filter-button ${
                activeCategory === category
                  ? 'active'
                  : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >

              <span>
                {categoryLabels[category]}
              </span>

              <strong>
                {categoryCounts[category]}
              </strong>

            </button>

          ))}

        </div>

      </section>


      <section className="games-category-info">

        <div className="games-info-icon">
          🎮
        </div>

        <div>

          <h2>
            ¿Qué significa cada categoría?
          </h2>

          <p>
            <strong>Principales:</strong> videojuegos
            centrados directamente en aventuras del universo
            de Shrek y sus personajes.
          </p>

          <p>
            <strong>Carreras:</strong> títulos donde la
            velocidad, los vehículos y las competencias
            son el elemento principal.
          </p>

          <p>
            <strong>Party:</strong> experiencias diseñadas
            para partidas rápidas, minijuegos o diversión
            multijugador.
          </p>

          <p>
            <strong>Misceláneos:</strong> propuestas que
            no encajan completamente en las categorías
            anteriores o que presentan una fórmula distinta.
          </p>

          <p>
            <strong>Educativos:</strong> videojuegos
            orientados al aprendizaje, actividades
            infantiles o experiencias educativas.
          </p>

        </div>

      </section>


      <div className="games-results-heading">

        <h2>
          {activeCategory === 'todos'
            ? 'Todos los videojuegos'
            : categoryLabels[activeCategory]}
        </h2>

        <span>
          {filteredGames.length}{' '}
          {filteredGames.length === 1
            ? 'título'
            : 'títulos'}
        </span>

      </div>


      {filteredGames.length > 0 ? (

        <div className="video-games-grid">

          {filteredGames.map((game) => (

            <MediaCard
              key={game.id}
              id={game.id}
              category="video-games"
              title={game.title}
              year={game.year}
              cover={game.cover}
              description={game.description}
              type={game.type}
              gameCategory={game.gameCategory}
            />

          ))}

        </div>

      ) : (

        <div className="games-empty">

          <span>🎮</span>

          <h2>
            No hay videojuegos en esta categoría
          </h2>

          <p>
            Todavía no has agregado títulos dentro
            de esta clasificación.
          </p>

        </div>

      )}

    </section>
  );
};

export default VideoGamesPage;
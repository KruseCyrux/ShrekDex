import { useLocation } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

import MoviesPage
  from '../pages/Movies/MoviesPage';

import SpinOffsPage
  from '../pages/SpinOffs/SpinOffsPage';

import MediaDetail
  from '../pages/MediaDetail/MediaDetail';

import './MainLayout.scss';

const MainLayout = () => {

  const location = useLocation();

  const renderContent = () => {

    // Página de películas
    if (location.pathname === '/movies') {
      return <MoviesPage />;
    }

    //Página de spin-offs
    if (location.pathname === '/spin-offs') {
      return <SpinOffsPage />;
    }

    // Ficha individual de una película
    if (location.pathname.startsWith('/movies/')) {
      return <MediaDetail />;
    }

    // Ficha individual de un spin-off
    if (location.pathname.startsWith('/spin-offs/')) {
      return <MediaDetail />;
    }

    // Página principal
    return (
      <>
        <div className="collection-intro">

          <h2>
            Bienvenido a ShrekDex
          </h2>

          <p>
            La Colección Shrek es el archivo definitivo dedicado al universo del ogro más famoso de la animación. Aquí encontrarás reunido todo el contenido relacionado con la franquicia creada por DreamWorks, desde las películas principales que revolucionaron el cine animado hasta cada uno de sus cortos, especiales, videojuegos, cómics, libros y material derivado.
          </p>

          <p>
            Explora la historia completa de Shrek, Fiona, Burro, Gato con Botas y el resto de los inolvidables habitantes de Muy Muy Lejano a través de una colección cuidadosamente organizada. Revive las aventuras de la saga principal, descubre los especiales navideños y de Halloween, disfruta de los cortometrajes que expanden el universo y adéntrate en los numerosos videojuegos lanzados para distintas generaciones de consolas.
          </p>

          <p>
            La colección también incluye los exitosos spin-offs protagonizados por Gato con Botas, tanto sus películas como series y contenido complementario, ampliando aún más este mundo lleno de humor, fantasía y personajes memorables. Además, encontrarás cómics, libros ilustrados, adaptaciones, material promocional y otros contenidos relacionados que han formado parte de la historia de la franquicia a lo largo de los años.
          </p>

          <p>
            Para explorar cada sección, simplemente presiona el botón correspondiente al tipo de contenido que deseas consultar. Cada categoría ha sido organizada de manera independiente para facilitar la navegación y permitirte acceder rápidamente a películas, cortometrajes, series, videojuegos, cómics, libros, música y mucho más.
          </p>

          <p>
            Ya seas un fan de toda la vida o alguien que desea descubrir cada rincón de este universo, esta colección busca convertirse en la referencia más completa para seguir el legado de Shrek y sus amigos, reuniendo más de dos décadas de entretenimiento en un solo lugar.
          </p>

        </div>

        <div className="notices">

          <div className="notice-box">

            <strong>
              ⚠️ Aviso importante
            </strong>

            <p>
              Esta colección se encuentra en
              constante expansión. Algunos apartados
              pueden estar incompletos mientras se
              incorporan nuevos aportes.
            </p>

          </div>

          <div className="notice-box">

            <strong>
              📌 Aclaración
            </strong>

            <p>
              Todo el material presentado pertenece
              a sus respectivos autores y propietarios.
              ShrekDex funciona como un proyecto de
              recopilación y organización.
            </p>

          </div>

        </div>
      </>
    );
  };

  return (
    <>
      <Header />

      <main className="layout">

        <section className="content">
          {renderContent()}
        </section>

        <Sidebar />

      </main>

      <Footer />
    </>
  );
};

export default MainLayout;
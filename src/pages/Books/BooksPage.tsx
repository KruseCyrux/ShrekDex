import books from '../../data/books.json';

import MediaCard
  from '../../components/MediaCard/MediaCard';

import './BooksPage.scss';

const BooksPage = () => {
  return (
    <section className="books-page">

      <div className="page-heading">

        <span>SHREKDEX</span>

        <h1>Libros</h1>

        <p>
          Recopilación de libros, novelas, cuentos,
          adaptaciones y material literario relacionado
          con el universo de Shrek.
        </p>

      </div>

      <div className="books-grid">

        {books.map((book) => (

          <MediaCard
            key={book.id}
            id={book.id}
            category="books"
            title={book.title}
            year={book.year}
            cover={book.cover}
            description={book.description}
            type={book.type}
          />

        ))}

      </div>

    </section>
  );
};

export default BooksPage;
import { useEffect, useState } from 'react';

import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import './GalleryCarousel.scss';

interface GalleryCarouselProps {
  images: string[];
  title: string;
}

const GalleryCarousel = ({
  images,
  title,
}: GalleryCarouselProps) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {

    if (images.length <= 1) {
      return;
    }

    const interval = setInterval(() => {

      setCurrentIndex((current) =>
        (current + 1) % images.length
      );

    }, 4000);

    return () => {
      clearInterval(interval);
    };

  }, [images.length]);

  const previousImage = () => {

    setCurrentIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );

  };

  const nextImage = () => {

    setCurrentIndex((current) =>
      (current + 1) % images.length
    );

  };

  return (
    <div className="gallery">

      <div className="gallery-main">

        <img
          src={images[currentIndex]}
          alt={`${title} - captura ${currentIndex + 1}`}
        />

        <button
          className="gallery-button gallery-button-left"
          onClick={previousImage}
          aria-label="Imagen anterior"
        >
          <ChevronLeft />
        </button>

        <button
          className="gallery-button gallery-button-right"
          onClick={nextImage}
          aria-label="Imagen siguiente"
        >
          <ChevronRight />
        </button>

      </div>

      <div className="gallery-indicators">

        {images.map((_, index) => (

          <button
            key={index}
            className={
              index === currentIndex
                ? 'active'
                : ''
            }
            onClick={() =>
              setCurrentIndex(index)
            }
            aria-label={`Mostrar imagen ${index + 1}`}
          />

        ))}

      </div>

    </div>
  );
};

export default GalleryCarousel;
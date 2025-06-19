import { useEffect, useState } from "react";
import { Button, Image } from "react-bootstrap";
import "../../styles/PhotoGalerry.css";
import { Photos } from "../../types";

interface Props {
  photos: Photos[]; // Un array de URLs de las fotos
  initialIndex?: number; // Índice inicial de la foto a mostrar (opcional)
}

function PhotoGallery({ photos, initialIndex = 0 }: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (
      photos.length > 0 &&
      initialIndex >= 0 &&
      initialIndex < photos.length
    ) {
      setCurrentIndex(initialIndex);
    } else if (photos.length > 0) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(-1);
    }
  }, [photos, initialIndex]);

  const handleNext = () => {
    setFade(true); // Activa el fade-out
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      setFade(false); // Desactiva el fade para el fade-in de la nueva imagen
    }, 200); // Duración de la transición de fade-out (debe coincidir con CSS)
  };

  const handlePrev = () => {
    setFade(true); // Activa el fade-out
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
      );
      setFade(false); // Desactiva el fade para el fade-in de la nueva imagen
    }, 200); // Duración de la transición de fade-out
  };

  if (photos.length === 0 || currentIndex === -1) {
    return <div className="text-center p-4">No hay fotos disponibles.</div>;
  }

  return (
    <div className="photo-gallery-container d-flex flex-column align-items-center justify-content-center p-3">
      <div className="image-wrapper">
        <Image
          src={
            photos[currentIndex].pathId
              ? `https://drive.google.com/thumbnail?id=${photos[currentIndex].pathId}`
              : "https://cdn3.iconfinder.com/data/icons/meteocons/512/n-a-512.png"
          }
          alt={`Gallery photo ${currentIndex + 1}`}
          fluid
          className={`gallery-image ${fade ? "fade-out" : "fade-in"}`}
        />
      </div>

      <div className="gallery-controls d-flex justify-content-between w-100 mt-3">
        <Button
          variant="secondary"
          onClick={handlePrev}
          disabled={photos.length <= 1}
        >
          &larr; Previous
        </Button>
        <span className="text-muted align-self-center">
          {currentIndex + 1} / {photos.length}
        </span>
        <Button
          variant="secondary"
          onClick={handleNext}
          disabled={photos.length <= 1}
        >
          Next &rarr;
        </Button>
      </div>
      <div>
        <br />
        <a
          className="icon-link"
          target="_blank"
          style={{ fontSize: "20px" }}
          href={`https://drive.google.com/drive/folders/${photos[currentIndex].folderId}`}
        >
          Google Drive folder
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="bi"
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default PhotoGallery;

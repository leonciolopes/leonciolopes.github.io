import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ImageLightbox({ images, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const handleNext = () => {
    setCurrentIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  // Fechar ao clicar fora da imagem
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Navegação por teclado
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          onClose();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Resolve item shape (string or { src, caption })
  const currentItem = images && images[currentIndex] ? images[currentIndex] : null;
  const currentSrc = currentItem
    ? typeof currentItem === "string"
      ? currentItem
      : currentItem.src
    : "";
  const currentCaption = currentItem && typeof currentItem !== "string" ? currentItem.caption : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative max-h-[90vh] max-w-[90vw]">
        <img
          src={currentSrc}
          alt={currentCaption || `Foto ${currentIndex + 1}`}
          className="max-h-[70vh] max-w-[90vw] object-contain"
        />

        {currentCaption && (
          <div className="mt-2 text-center text-sm text-slate-200">{currentCaption}</div>
        )}

        <button
          onClick={onClose}
          className="absolute -right-4 -top-4 rounded-full bg-white p-2 text-black shadow-lg hover:bg-gray-100"
        >
          <X className="h-6 w-6" />
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow-lg hover:bg-white"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-black shadow-lg hover:bg-white"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-sm text-white">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
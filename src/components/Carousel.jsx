import React, { useState } from "react";
import "../sass/main.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="carousel__control prev" onClick={goToPrev}>
        ‹
      </button>
      <div className="carousel__slides">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <button className="carousel__control next" onClick={goToNext}>
        ›
      </button>
      <div className="carousel__counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

export default Carousel;

// src/components/ui/carousel.jsx
import React, { useState } from "react";

export const Carousel = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % React.Children.count(children));
  };

  const previous = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + React.Children.count(children)) % React.Children.count(children)
    );
  };

  return (
    <div className={`carousel ${className}`}>
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {children}
      </div>
      <CarouselPrevious onClick={previous} className="bg-gray-500 text-white rounded-md">Previous</CarouselPrevious>
      <CarouselNext onClick={next} className="bg-gray-500 text-white rounded-md">Next</CarouselNext>
    </div>
  );
};

export const CarouselContent = ({ children }) => (
  <div className="carousel-content">{children}</div>
);

export const CarouselItem = ({ children }) => (
  <div className="carousel-item">{children}</div>
);

export const CarouselNext = ({ className, children, onClick }) => (
  <button className={`carousel-next ${className}`} onClick={onClick}>{children}</button>
);

export const CarouselPrevious = ({ className, children, onClick }) => (
  <button className={`carousel-previous ${className}`} onClick={onClick}>{children}</button>
);

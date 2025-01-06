'use client'
import React from 'react'
import { useState, useRef, useEffect  } from 'react';

import leftarrow from "../assets/left-arrow.png";
import rightarrow from "../assets/right-arrow.png";

import '../styles/carousel.css';

import banner1 from '../assets/dnbanner1.jpg';
import banner2 from '../assets/dnbanner2.jpg';
import banner3 from '../assets/dnbanner3.png';

import Image from 'next/image';

const Carousel = () => {

    const images = [
        banner1,
        banner2,
        banner3,
      ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // Lock for transition
  const carouselRef = useRef<HTMLDivElement>(null);

  // Handle swipe gesture
  const startTouchX = useRef(0);
  const endTouchX = useRef(0);

  // Lock mechanism to prevent rapid state updates
  const slideTransition = (newIndex: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(newIndex);

      // Set a short delay to allow the transition to complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Match this with your CSS transition duration (0.7s)
    }
  };

  const nextSlide = () => {
    slideTransition((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    slideTransition((currentIndex - 1 + images.length) % images.length);
  };

  const setSlide = (index: number) => {
    slideTransition(index);
  };

  // Function to handle touch start
  const handleTouchStart = (e: React.TouchEvent) => {
    startTouchX.current = e.touches[0].clientX;
  };

  // Function to handle touch end
  const handleTouchEnd = () => {
    const delta = startTouchX.current - endTouchX.current;

    // Check the swipe direction
    if (delta > 50) {
      nextSlide(); // swipe left
    } else if (delta < -50) {
      prevSlide(); // swipe right
    }
  };

  // Function to handle touch move
  const handleTouchMove = (e: React.TouchEvent) => {
    endTouchX.current = e.touches[0].clientX;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]); // Depend on currentIndex to reset the timer on manual slide changes

  return (
  <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div
        className="carousel relative w-full overflow-hidden rounded-lg"
        ref={carouselRef} // Reference for touch events
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        <div
          className="carousel-inner flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-item w-full flex-shrink-0 m-x-5">
              <Image
                src={image}
                alt={`Work ${index + 1}`}
                width={800}
                height={400}
                className="w-full object-contain h-96"
              />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <Image
          src={leftarrow}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full focus:outline-none left-arrow shadow-lg cursor-pointer hidden md:block"
          height={45}
          width={45}
          alt="left arrow"
          title="left arrow"
          onClick={prevSlide}
        />

        {/* Right Arrow */}
        <Image
          src={rightarrow}
          height={45}
          width={45}
          className="absolute top-1/2 right-4 transform -translate-y-1/2  text-gray-800   focus:outline-none rounded-full right-arrow shadow-lg cursor-pointer hidden md:block"
          alt="right arrow"
          title="right arrow"
          onClick={nextSlide}
        />
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full focus:outline-none ${
              currentIndex === index ? "bg-gray-900" : "bg-gray-500"
            }`}
            onClick={() => setSlide(index)}
             aria-label="Μετάβαση στη επόμενη διαφάνεια"
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
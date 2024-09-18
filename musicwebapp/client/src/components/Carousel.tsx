// components/Carousel.js
"use client";
import { useState, useEffect } from 'react';
import 'next/image';

const images = [
    '/carouselimages/1.png',
    '/carouselimages/5.png',
    '/carouselimages/3.png',
    '/carouselimages/4.png'
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

  
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="relative w-full max-w-7xl mx-auto">
            <div className="overflow-hidden">
                {/* Fixed size for images */}
                <img 
                    className="w-full h-40 lg:h-80 mt-20 rounded-s-full object-cover bg-fuchsia-800 p-0.5" 
                    src={images[currentIndex]} 
                    alt={`Slide ${currentIndex + 1}`} 
                />
            </div>

            {/* Left arrow */}
            <button
                onClick={prevSlide}
                className="absolute top-2/3 left-2 transform -translate-y-1/2 bg-fuchsia-800 opacity-50 text-white p-2 rounded-full z-1 focus:outline-none lg:left-4"
            >
                &lt;
            </button>

            {/* Right arrow */}
            <button
                onClick={nextSlide}
                className="absolute top-2/3 right-2 transform -translate-y-1/2 bg-fuchsia-800 opacity-50 text-white p-2 rounded-full z-1 focus:outline-none lg:right-4"
            >
                &gt;
            </button>
        </div>
    );
}

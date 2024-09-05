// components/Carousel.js
"use client";
import { useState } from 'react';
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

    return (
        <div className="relative">
            <div className="overflow-hidden">
                <img className="w-full mt-20 rounded-s-full bg-fuchsia-800 p-1 max-h-96 object-cover" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-72 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &lt;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-72 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            >
                &gt;
            </button>
        </div>
    );
}

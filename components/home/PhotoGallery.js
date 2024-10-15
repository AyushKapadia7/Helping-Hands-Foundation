// components/Gallery.js
import React from "react";

const images = [
  "/gallery/01.png",
  "/gallery/02.png",
  "/gallery/03.png",
  "/gallery/04.png",
  "/gallery/05.png",
  "/gallery/06.png",
];

const Gallery = () => {
  return (
    <div className="py-10 bg-gray-100" id="photo-gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="relative group">
              <img
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 transform "
                src={src}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

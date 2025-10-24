
import React from 'react';

const GalleryImage: React.FC<{ src: string, alt: string, className?: string }> = ({ src, alt, className = '' }) => (
  <div className={`overflow-hidden rounded-lg shadow-lg ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
    />
  </div>
);

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-off-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-forest-green mb-4">Moments in Nature</h2>
          <p className="text-lg text-stone-gray max-w-3xl mx-auto">
            A glimpse into the stunning landscapes and serene moments our community has experienced.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="grid gap-4">
            <GalleryImage src="https://picsum.photos/seed/gal1/800/1200" alt="Lush forest path" />
            <GalleryImage src="https://picsum.photos/seed/gal2/800/600" alt="Mountain reflection on a lake" />
          </div>
          <div className="grid gap-4">
             <GalleryImage src="https://picsum.photos/seed/gal3/800/600" alt="Sunlight through trees" />
             <GalleryImage src="https://picsum.photos/seed/gal4/800/1200" alt="Waterfall in a canyon" />
          </div>
          <div className="grid gap-4">
            <GalleryImage src="https://picsum.photos/seed/gal5/800/1200" alt="Coastal cliffs at sunset" />
            <GalleryImage src="https://picsum.photos/seed/gal6/800/600" alt="A field of wildflowers" />
          </div>
          <div className="grid gap-4">
            <GalleryImage src="https://picsum.photos/seed/gal7/800/600" alt="Starry night sky over a desert" />
            <GalleryImage src="https://picsum.photos/seed/gal8/800/1200" alt="Person hiking on a ridge" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

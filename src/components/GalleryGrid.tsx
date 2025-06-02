import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles/GalleryGrid.css';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  
  const categories = ['all', ...new Set(images.map(image => image.category))];
  
  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  return (
    <div className="gallery-container">
      <div className="gallery-filter">
        {categories.map((category, index) => (
          <button 
            key={index} 
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => setLightboxImage(image.src)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="gallery-overlay">
              <p>{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
      
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <button className="close-lightbox">
            <X size={24} />
          </button>
          <img src={lightboxImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
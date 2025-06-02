import React from 'react';
import HeroSection from '../components/HeroSection';
import GalleryGrid from '../components/GalleryGrid';
import '../styles/Gallery.css';

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/31643020/pexels-photo-31643020/free-photo-of-serene-river-landscape-in-ramamangalam-kerala.png?auto=compress&cs=tinysrgb&w=600',
      alt: 'Village Landscape',
      category: 'village'
    },
    {
      id: 2,
      src: 'https://media.istockphoto.com/id/491267876/photo/cauliflower-plantation.jpg?b=1&s=612x612&w=0&k=20&c=llHvM15l90TuKxzShH03fgYD57dVT3cMaEOEAnqbXO8=',
      alt: 'Farming Activities',
      category: 'agriculture'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Local Festival Celebration',
      category: 'culture'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Community Meeting',
      category: 'events'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'School Children',
      category: 'education'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/28236020/pexels-photo-28236020/free-photo-of-kerala-cultural-programmes.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Cultural Program',
      category: 'culture'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/31942685/pexels-photo-31942685/free-photo-of-vibrant-temple-scene-in-badami-karnataka.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Village Temple',
      category: 'village'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/27442241/pexels-photo-27442241/free-photo-of-sultan-sazligi.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Wheat Fields',
      category: 'agriculture'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/31959161/pexels-photo-31959161/free-photo-of-indian-farmer-bathing-water-buffaloes-in-summer-pond.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Village Pond',
      category: 'village'
    },
    {
      id: 10,
      src: 'https://media.istockphoto.com/id/544678254/photo/inside-field-hospital-tent.jpg?b=1&s=612x612&w=0&k=20&c=DO4_3bruHVM4vOcQOzsGaVyYS83vJlJKGE6D-ZqfnB4=',
      alt: 'Health Camp',
      category: 'events'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/31940733/pexels-photo-31940733/free-photo-of-indonesian-students-in-classroom-exam-setting.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'School Activities',
      category: 'education'
    },
    {
      id: 12,
      src: 'https://media.istockphoto.com/id/143917716/photo/traditional-folk-dancers-in-india.jpg?b=1&s=612x612&w=0&k=20&c=hMcjole_JmhuoLOCops8zjJ1J310lrhCxky5fg4zPro=',
      alt: 'Traditional Dance',
      category: 'culture'
    }
  ];

  const videoGallery = [
    {
      id: 1,
      title: 'Village Development Project',
      thumbnail: 'https://images.pexels.com/photos/5812063/pexels-photo-5812063.jpeg',
      duration: '3:45',
    },
    {
      id: 2,
      title: 'Republic Day Celebration 2025',
      thumbnail: 'https://images.pexels.com/photos/1582493/pexels-photo-1582493.jpeg',
      duration: '5:12',
    },
    {
      id: 3,
      title: 'Gram Sabha Meeting Highlights',
      thumbnail: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
      duration: '7:30',
    }
  ];

  return (
    <div className="gallery-page">
      <HeroSection 
        title="Our Gallery" 
        subtitle="Capturing the essence and spirit of ShreeRampur"
        backgroundImage="https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg"
      />

      <section className="photo-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Photo Gallery</h2>
            <p>A visual journey through our village life and activities</p>
          </div>
          
          <GalleryGrid images={images} />
        </div>
      </section>

      <section className="video-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Video Gallery</h2>
            <p>Watch videos showcasing village events and achievements</p>
          </div>
          
          <div className="video-gallery">
            {videoGallery.map(video => (
              <div key={video.id} className="video-item">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" width="48" height="48" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span className="video-duration">{video.duration}</span>
                </div>
                <h3 className="video-title">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-cta-section">
        <div className="container">
          <div className="gallery-cta-content">
            <h2>Share Your Village Moments</h2>
            <p>
              Do you have photos or videos of ShreeRampur village events or beautiful locations?
              Share them with us to be featured in our gallery.
            </p>
            <button className="btn-primary">Submit Media</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
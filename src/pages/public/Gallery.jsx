import React, { useState } from 'react';

// Gallery images - replace these with your actual event photos
const galleryImages = [
    { 
        id: 1, 
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Hackathon Event',
        description: 'Annual RPI Hackathon 2024'
      },
      { 
        id: 2, 
        src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Coding Workshop',
        description: 'Web Development Workshop'
      },
      { 
        id: 3, 
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Tech Conference',
        description: 'Annual Tech Conference 2024'
      },
      { 
        id: 4, 
        src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Programming Session',
        description: 'Advanced Programming Techniques'
      },
      { 
        id: 5, 
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Data Science Workshop',
        description: 'Data Analysis Workshop'
      },
      { 
        id: 6, 
        src: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Tech Meetup',
        description: 'Monthly Tech Meetup'
      },{ 
        id: 1, 
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Hackathon Event',
        description: 'Annual RPI Hackathon 2024'
      },
      { 
        id: 2, 
        src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Coding Workshop',
        description: 'Web Development Workshop'
      },
      { 
        id: 3, 
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Tech Conference',
        description: 'Annual Tech Conference 2024'
      },
      { 
        id: 4, 
        src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Programming Session',
        description: 'Advanced Programming Techniques'
      },
      { 
        id: 5, 
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Data Science Workshop',
        description: 'Data Analysis Workshop'
      },
      { 
        id: 6, 
        src: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Tech Meetup',
        description: 'Monthly Tech Meetup'
      },{ 
        id: 1, 
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Hackathon Event',
        description: 'Annual RPI Hackathon 2024'
      },
      { 
        id: 2, 
        src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Coding Workshop',
        description: 'Web Development Workshop'
      },
      { 
        id: 3, 
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Tech Conference',
        description: 'Annual Tech Conference 2024'
      },
      { 
        id: 4, 
        src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Programming Session',
        description: 'Advanced Programming Techniques'
      },
      { 
        id: 5, 
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Data Science Workshop',
        description: 'Data Analysis Workshop'
      },
      { 
        id: 6, 
        src: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Tech Meetup',
        description: 'Monthly Tech Meetup'
      },{ 
        id: 1, 
        src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Hackathon Event',
        description: 'Annual RPI Hackathon 2024'
      },
      { 
        id: 2, 
        src: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Coding Workshop',
        description: 'Web Development Workshop'
      },
      { 
        id: 3, 
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Tech Conference',
        description: 'Annual Tech Conference 2024'
      },
      { 
        id: 4, 
        src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Programming Session',
        description: 'Advanced Programming Techniques'
      },
      { 
        id: 5, 
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Data Science Workshop',
        description: 'Data Analysis Workshop'
      },
      { 
        id: 6, 
        src: 'https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
        alt: 'Tech Meetup',
        description: 'Monthly Tech Meetup'
      },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen   py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold   mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Capturing the best moments from our events, workshops, and community gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-sky-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-h-[80vh] w-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
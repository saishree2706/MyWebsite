// ImageCarousel.tsx
import React from 'react';
import { MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface ImageCarouselProps {
  title: string;
  location: string;
  description: string;
  images: string[];
  delay?: number; // in ms
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ title, location, description, images, delay = 10000 }) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay, disableOnInteraction: false }}
          className="h-56 md:h-64"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <img
                  src={img}
                  alt={`slide-${idx}`}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center text-white">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{location}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


import casio from '../../../assets/brands/casio.png';
import amazon from '../../../assets/brands/amazon.png';
import moonstar from '../../../assets/brands/moonstar.png';
import star from '../../../assets/brands/start.png';
import startPeople from '../../../assets/brands/start-people 1.png';
import randstad from '../../../assets/brands/randstad.png';

const logos = [casio, amazon, moonstar, star, startPeople, randstad];

const ClientsSection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden mb-5 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          We've helped thousands of <span className="text-[#03373D]">sales teams</span>
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        speed={4000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full px-4"
      >
        {[...logos, ...logos].map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="h-12 w-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientsSection;

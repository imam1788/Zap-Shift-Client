import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
import customerImg from "../../../assets/customer-top.png";
import reviewQuote from '../../../assets/reviewQuote.png'

const testimonials = [
  {
    id: 1,
    name: "Awlad Hossin",
    role: "E-commerce Merchant",
    feedback:
      "ProFast’s express delivery in Dhaka always arrives within hours. My customers are impressed every time.",
  },
  {
    id: 2,
    name: "Rasel Ahamed",
    role: "Customer from Sylhet",
    feedback:
      "Tracking my parcel was so easy. I felt fully informed throughout the delivery process.",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    role: "Logistics Manager",
    feedback:
      "Our company logistics improved a lot after switching to ProFast. Reliable delivery and great support.",
  },
  {
    id: 4,
    name: "Sumaiya Akter",
    role: "Online Seller",
    feedback:
      "I send 10+ parcels daily using ProFast. The cash on delivery and return options are lifesavers!",
  },
  {
    id: 5,
    name: "Jahid Islam",
    role: "Freelancer",
    feedback:
      "ProFast service is always on time, making my deliveries hassle-free.",
  },
  {
    id: 6,
    name: "Fatima Noor",
    role: "Online Shopper",
    feedback: "I love how easy it is to track my parcels with ProFast!",
  },
];

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#f8f9fa] py-16 px-4 text-center rounded-2xl">
      <div className="max-w-6xl mx-auto">
        {/* Top Icon & Title */}
        <img src={customerImg} className="w-20 mx-auto mb-4" alt="Top icon" />
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-3">
          What our customers are saying
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Trusted by thousands across Bangladesh — from personal senders to corporate partners.
        </p>

        {/* Swiper */}
        <Swiper
          modules={[Pagination]}
          loop={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`p-6 rounded-xl transition duration-300 mb-16 h-full ${isActive
                    ? "bg-white text-black scale-105 shadow-xl z-20"
                    : "bg-gray-100 text-gray-400 opacity-60 scale-95"
                    }`}
                >
                  <img src={reviewQuote} className="text-2xl mb-4" alt="" />
                  <p className="mb-6 text-sm md:text-base">{item.feedback}</p>
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm">{item.role}</div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import liveTracking from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png'

const cards = [
  {
    id: 1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    img: liveTracking
  },
  {
    id: 2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    img: safeDelivery
  },
  {
    id: 3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    img: safeDelivery
  },
];

const InfoCards = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid gap-2 grid-cols-1">
        {cards.map(({ id, title, description, img }) => (
          <div
          data-aos='zoom-out-left'
            key={id}
            className="flex items-center bg-white rounded-lg shadow-md px-6 py-12 hover:shadow-xl transition"
          >
            <div className='w-[25%] '>
              <img
                src={img}
                alt={title}
                className="w-28 h-28 rounded-md object-cover mr-6 flex-shrink-0 "
              />
            </div>
            <div className="mx-6 h-24 w-[2px] bg-gray-300"></div>
            <div className='w-[70%] '>
              <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;

import React, { useState } from "react";

const faqData = [
  {
    question: "How fast is ProFast’s delivery service?",
    answer:
      "We offer express delivery in Dhaka and major cities, usually within hours of parcel pickup.",
  },
  {
    question: "Can I track my parcel in real-time?",
    answer:
      "Yes! Our tracking system keeps you informed every step of the way, so you always know where your parcel is.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash on delivery, mobile payments, and online payments for your convenience.",
  },
  {
    question: "Do you offer return options for parcels?",
    answer:
      "Absolutely. If your parcel needs to be returned, we provide hassle-free return services.",
  },
  {
    question: "Is ProFast available outside Dhaka?",
    answer:
      "Yes, we serve many cities across Bangladesh with reliable delivery options.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border rounded-lg p-4 cursor-pointer transition-colors duration-300 ${isOpen
                ? "bg-[#E6F2F3] text-black border-transparent"
                : "bg-white text-black border-gray-300"
                }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{item.question}</h3>
                <span className="text-2xl select-none">
                  {isOpen ? "−" : "+"}
                </span>
              </div>
              {isOpen && (
                <p className="mt-3 text-sm md:text-base">{item.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;

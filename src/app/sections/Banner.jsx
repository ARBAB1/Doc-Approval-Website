// app/HeroSlider.js

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner =()=> {
  const slides = [
    {
      image: "/images/slide1.jpeg",
      title: "Efficient Government Legal Services",
      description: "We handle your government-related legal needs swiftly and professionally.",
    },
    {
      image: "/images/slide2.jpg",
      title: "NICOP & FRC Registration",
      description: "Supporting you with NICOP and Family Registration Certificate processes.",
    },
    {
      image: "/images/slide3.webp",
      title: "HEC Document Attestation",
      description: "Assisting with your academic document attestation from HEC.",
    },
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="max-w-lg mx-auto mb-8">{slide.description}</p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700">
                Learn More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Banner
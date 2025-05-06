"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function HeroComponent() {
  return (
    // <div className="hero-container text-indigo-900 flex">
    //   <div className="hero-slider-container flex bg-slate-200 ">
    <div className="max-w-[100%]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
      >
        <SwiperSlide className="flex justify-center items-center w-full">
          <div className="flex flex-row">
            <Image
              src="/book-thumbs.png"
              alt="Book Thumbnail"
              width={600}
              height={600}
              className="flex h-[400px] w-[400px] aspect-square object-cover"
            />
            <h1>slide 1</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/book-thumbs.png"
            alt="Book Thumbnail"
            width={600}
            height={600}
            className="flex h-[400px] w-[400px] aspect-square object-cover"
          />
          <h1>slide 2</h1>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/book-thumbs.png"
            alt="Book Thumbnail"
            width={600}
            height={600}
            className="flex h-[400px] w-[400px] aspect-square object-cover"
          />
          <h1>slide 3</h1>
        </SwiperSlide>
      </Swiper>
    </div>
    //   <h1 className="hero-title">Welcome to Nice Dream</h1>
    //   <p className="hero-subtitle">
    //     Your journey to better dreams starts here.
    //   </p>
    //   <button className="hero-button">Get Started</button>
    // </div>
  );
}

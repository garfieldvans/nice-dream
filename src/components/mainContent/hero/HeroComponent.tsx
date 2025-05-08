"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { heroData } from "@/utils/data";

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
        {heroData.map((book) => {
          return (
            <SwiperSlide className="flex justify-center items-center w-full">
              <div className="flex flex-row">
                <figure className="flex justify-center items-center h-[400px] w-[400px] aspect-square m-0">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={500}
                    height={500}
                    className="flex w-full h-full aspect-square object-contain"
                    priority={false}
                    loading="lazy"
                  />
                </figure>
                <div>
                  <h1>{book.title}</h1>
                  <div>
                    <p>{book.description}</p>
                    <p>{book.bahasa}</p>
                  </div>
                  <div>
                    <a href={book.url} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Baca
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
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

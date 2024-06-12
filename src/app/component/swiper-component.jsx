// components/SwiperComponent.js
"use client"; // Ensure this is a client component
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

Swiper.use([Navigation]);

const SwiperComponent = ({ children, slidesPerView }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    let swiperInstance;
    const initializeSwiper = () => {
      if (swiperRef.current) {
        swiperInstance = new Swiper(swiperRef.current, {
          slidesPerView: slidesPerView || 1, // Default to 1 if slidesPerView is not provided
          spaceBetween: 20,
          navigation: {
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          },
          on: {
            slideChange: () => console.log("slide changed"),
          },
        });
      }
    };

    initializeSwiper();

    // Clean up Swiper instance on component unmount
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [slidesPerView]);

  return (
    <div className="relative max-w-container">
      <div ref={swiperRef} className="overflow-hidden swiper-container">
        <div className="swiper-wrapper">
          {React.Children.map(children, (child, index) => (
            <div key={index} className="swiper-slide">
              {child}
            </div>
          ))}
        </div>
        {/* Custom navigation elements */}
        <div>
          <div className="custom-next absolute z-10 top-1/2 -right-[20px] w-[40px] shadow-md h-[40px] flex rounded-full justify-center items-center bg-white cursor-pointer">
            <div className="sr-only">Next</div>
            <Image
              src={
                "https://images-dom.prod.aws.idp-connect.com/cug-cont/images/arrow_right.svg"
              }
              alt="arrow"
              width={18}
              height={16}
            />
          </div>
          <div className="custom-prev absolute z-10 top-1/2 -left-[20px] w-[40px] shadow-md h-[40px] flex rounded-full justify-center items-center bg-white cursor-pointer">
            <div className="sr-only">Prev</div>
            <Image
              src={
                "https://images-dom.prod.aws.idp-connect.com/cug-cont/images/arrow_left.svg"
              }
              alt="arrow"
              width={18}
              height={16}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperComponent;

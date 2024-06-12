"use client";
import React from "react";
import { useState } from "react";

import SwiperComponent from "./swiper-component";
import Image from "next/image";

const PopularSubjectComponent = () => {
  const [swiper, setSwiper] = useState(null);

  const handleSlideChange = () => {
    console.log("Slide changed");
  };

  const handleSwiper = (swiper) => {
    setSwiper(swiper);
  };
  return (
    <>
      <div className=" py-[80px]">
        <div className="max-w-container mx-auto">
          <SwiperComponent
            onSwiper={handleSwiper}
            onSlideChange={handleSlideChange}
            slidesPerView={3}
          >
            <div>
              <a
                href=""
                className="relative after:bg-black/50 after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1/3 after:absolute"
              >
                <Image
                  src={
                    "https://images.ctfassets.net/szez98lehkfm/ngzwVE20nCy7M671FgtDm/9d0b4810ff757c95a4f38724ef8d7b41/MyIC_Article_81254?w=354&h=199&fm=webp&fit=fill"
                  }
                  alt="image 1"
                  width={354}
                  height={199}
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 pb-[16px] px-[16px] text-white z-10">
                  <p className="font-custom-bold">Law</p>
                  <p>Read subject guide</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href=""
                className="relative after:bg-black/50 after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1/3 after:absolute"
              >
                <Image
                  src={
                    "https://images.ctfassets.net/szez98lehkfm/3W7eGncVxhZ19Xd9b7s1Dl/10f293ec20d01830368edda25aba3da9/MyIC_Article_78543?w=354&h=199&fm=webp&fit=fill"
                  }
                  alt="image 1"
                  width={354}
                  height={199}
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 pb-[16px] px-[16px] text-white z-10">
                  <p className="font-custom-bold">Accounting & Finance</p>
                  <p>Read subject guide</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href=""
                className="relative after:bg-black/50 after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1/3 after:absolute"
              >
                <Image
                  src={
                    "https://images.ctfassets.net/szez98lehkfm/3W7eGncVxhZ19Xd9b7s1Dl/10f293ec20d01830368edda25aba3da9/MyIC_Article_78543?w=354&h=199&fm=webp&fit=fill"
                  }
                  alt="image 1"
                  width={354}
                  height={199}
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 pb-[16px] px-[16px] text-white z-10">
                  <p className="font-custom-bold">Business</p>
                  <p>Read subject guide</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href=""
                className="relative after:bg-black/50 after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1/3 after:absolute"
              >
                <Image
                  src={
                    "https://images.ctfassets.net/szez98lehkfm/3zgRMBK6XCqYJHoLhIGImY/42b871081ff496c5d44315bbe14dfa3a/MyIC_Article_80735?w=354&h=199&fm=webp&fit=fill"
                  }
                  alt="image 1"
                  width={354}
                  height={199}
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 pb-[16px] px-[16px] text-white z-10">
                  <p className="font-custom-bold">Architecture</p>
                  <p>Read subject guide</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href=""
                className="relative after:bg-black/50 after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1/3 after:absolute"
              >
                <Image
                  src={
                    "https://images.ctfassets.net/szez98lehkfm/yp8S8Ubc7zlt0HHMSiYlc/38527d0a0e32afbca9a406426cc8f798/MyIC_Article_80789?w=354&h=199&fm=webp&fit=fill"
                  }
                  alt="image 1"
                  width={354}
                  height={199}
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 pb-[16px] px-[16px] text-white z-10">
                  <p className="font-custom-bold">Biological Sciences</p>
                  <p>Read subject guide</p>
                </div>
              </a>
            </div>
            <div>
              <a
                href=""
                className="relative after:bg-black/50 after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1/3 after:absolute"
              >
                <Image
                  src={
                    "https://images.ctfassets.net/szez98lehkfm/5zF1mT4KCABy2fWYKq3drq/db2431b8d0c357d15f63dce0b20e1e81/MyIC_Article_81303?w=354&h=199&fm=webp&fit=fill"
                  }
                  alt="image 1"
                  width={354}
                  height={199}
                  className="w-full"
                />
                <div className="absolute bottom-0 left-0 pb-[16px] px-[16px] text-white z-10">
                  <p className="font-custom-bold">Medicine</p>
                  <p>Read subject guide</p>
                </div>
              </a>
            </div>
          </SwiperComponent>
        </div>
      </div>
    </>
  );
};
export default PopularSubjectComponent;

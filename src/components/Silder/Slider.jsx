// components/Slider/Slider.js
"use client"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider-module.css"; // فرض بر این است که استایل‌ها در فایل CSS جداگانه قرار دارند
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Link from "next/link"; // استفاده از Link از Next.js
import { imgSliderData } from "@/datas";

export default function Slider() {
  const [dataImg, setImgData] = useState(imgSliderData);

  return (
    <div className={'container-swiper-slider mt-5'}>
      <div className={'bg-swiper-slider'}>
        <h2>نمونه کارهای ما</h2>

        <div className={'swiper-slider mt-5'}>
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            loop={true}
            slidesPerView={"auto"}
            autoplay={{ delay: 3000 }}
            grabCursor={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            className="d-flex"
            pagination={{
              el: ".pagination-controller",
              clickable: true,
            }}
          >
            {dataImg.map((data) => (
              <SwiperSlide
                className="w-auto d-flex justify-content-center"
                key={data.id}
              >
                <img
                  decoding="async"
                  src={data.image}
                  alt="img slider"
                  width="700px"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="pagination-controller text-center p-4"></div>

          <Link href="/gallery">از گالری ما دیدن فرمایید</Link>
        </div>
      </div>
    </div>
  );
}

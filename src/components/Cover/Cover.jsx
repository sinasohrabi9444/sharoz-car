import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { imgSliderCoverData } from "@/datas";
import { Pagination, Navigation, Parallax } from "swiper/modules";
import "./Cover.css";
export default function Cover() {
  const [imgSliderData, setimgSliderData] = useState(imgSliderCoverData);

  return (
    <div className="container-cover">
      <div className="container wrapper-covers">
        <div className="about-cover ">
          <h2 className="">کاور های مجموعه <span className="text-danger bold">Shahroz Tiuning</span></h2>
         
          <p> در مجموعه <span className="f-bold">شهروز تیونینگ</span>، ما به ارائه انواع کاورهای خودرو با کیفیت
          بالا می‌پردازیم. محصولات ما شامل کاورهای مات،کاور های کالر شیفت وکاور های  فیبر کربن،
           کاور های شفاف است. با اجرای بهترین کار و استفاده از مواد اولیه درجه یک، به شما
          این امکان را می‌دهیم که خودروی خود را به شکلی منحصر به فرد و جذاب
          تغییر دهید. <span className="run-service">همچنین اجرای خدمات در محل مشتری</span> ،هدف ما، رضایت شما و زیبایی هرچه بیشتر خودرویتان است.
        </p>
         </div>
        <div className="wrapper-cover ">
          {imgSliderData.map((img) => (
            <div className="img-container-cover  ">
              <img src={img.src} alt="covers" />
              <div className="overlay-cover">
                <div className="text-overlay">{img.desc}</div>
              </div>
            </div>
          ))}
          <div className="pagination-controller text-center p-4"></div>
        </div>
      </div>
    </div>
  );
}

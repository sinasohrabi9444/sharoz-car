// components/Footer/Footer.js
import React from "react";
import "./Footer-module.css"; // فرض بر این است که استایل‌ها در فایل CSS جداگانه قرار دارند
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { newsData } from "@/datas";
import { SlClock } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className={'footer'}>
      <div className={'footer-content'}>
        <div className={'about-footer'}>
          <div className={'about-title-footer'}>
            <img src="/img/img-video/logo.png" alt="logo" />
            <h4>شهروز تیونینگ</h4>
          </div>
          <p>
            این یه متن نمونه است ؛ خیلی ممنون. از کجا کسی که بخواهد از چیزها چشم
            پوشی کند، اتفاقاً بزرگتر می شود، چیزهای بزرگ را تحمل می کند دردها
            انتخاب عاقلانه ای برای لذت بردن هستند، مگر اینکه وظیفه باشند. تمایز
            پیروی از او در واقع باید انتخاب شود، اما به حق، همه من او را به
            کارهای سخت تر و چاپلوس تر باز نمی کنم گرفتاری ها و امثال آن بدن
            بزرگ. عواقب در هر صورت!
          </p>
          <Link href="/about">
            <h6 className="btn btn-warning">درباره مجموعه بیشتر بدانید</h6>
          </Link>
        </div>
        <div className={'two-section'}>
          <div className={'contact-footer'}>
            <h4>اطلاعات تماس</h4>
            <ul>
              <li>
                <FaPhoneFlip /> 09128765403
              </li>
              <li>
                <FaPhoneFlip /> 09120827255
              </li>
              <li>
                <CgMail /> example@gmail.com
              </li>
            </ul>
            <div className={'navbar-icons'}>
              <div className={'navbar-icon'}>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
              <div className={'navbar-icon'}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
              </div>
              <div className={'navbar-icon'}>
                <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>
          <div className={'services-footer'}>
            <h4>خدمات ما</h4>
            <ul>
              {newsData.map((news) => (
                <li key={news.id}>
                  <Link href={`${news.url}/${news.id}`}>
                    <h6>{news.title}</h6>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={'work-time'}>
          <h4>ساعت کاری ما</h4>
          <div className="d-flex weekDay">
            <div>
              <ul>
                {["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"].map((day, index) => (
                  <li key={index}>
                    <span>
                      <SlClock />
                    </span>
                    {day}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {Array(7).fill("9 تا 7").map((time, index) => (
                  <li key={index}>{time}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

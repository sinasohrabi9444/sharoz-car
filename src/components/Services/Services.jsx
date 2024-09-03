// components/Services/Services.js
"use client"

import React, { useEffect } from 'react';
import { newsData } from '@/datas';
import Link from 'next/link'; // استفاده از Link از Next.js
import NavbarSection from '../NavbarSection/NavbarSection';
import'./Services-module.css'; // فرض بر این است که استایل‌ها در فایل CSS جداگانه قرار دارند

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // اضافه کردن آرایه خالی برای جلوگیری از اجرای مکرر

  return (
    <>
      <NavbarSection />
      <div className={"container-news"}>
        <div className={"header-news"}>
          <h3>خدمات ما</h3>
        </div>
        <div className={"news-items"}>
          {newsData.map((news) => (
            <div className={"news-item"} key={news.id}>
              <h4>{news.title}</h4>
              <img src={news.img} alt={news.title} />
              <p className="mt-3">{news.description}</p>
              <Link href={`${news.url}`}>
                <h6>بیشتر بخوانید</h6>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={"need-help-about"}>
        <div className={"need-help-text"}>
          <h2>به کمک نیاز دارید؟</h2>
          <span>با ما تماس بگیرید با شماره 09121111111</span>
        </div>
        <Link className='a-link' href="/contact">
          <h6 className={"btn-contact-us"}>تماس با ما</h6>
        </Link>
      </div>
    </>
  );
}

// components/News/News.js
import React from "react";
import "./News-module.css"; // فرض بر این است که استایل‌ها در فایل CSS جداگانه قرار دارند
import Link from "next/link"; // اضافه کردن Link از next/link
import { newsData } from "@/datas"; // فرض بر این است که داده‌های اخبار در این فایل قرار دارند

export default function News() {
  const LimitedText = ({ text, maxLength }) => {
    const displayText =
      text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return <p className={'limited-text'}>{displayText}</p>;
  };

  return (
    <div className={'news-container text-center mt-5 pt-5'}>
      <h3>آخرین اخبار ما</h3>
      <h6>
        ما هفتگی اخباری از بروزرسانی دنیای خودروها منتشر می‌کنیم. منتظر باشید
      </h6>

      <div className={'card-wrapper-news'}>
        {newsData.slice(0, 3).map((news) => (
          <div className={'card-body-news'} key={news.id}>
            <img src={news.img} alt={news.title} />
            <h4 className={'text-black'}>{news.title}</h4>

            <LimitedText maxLength={100} text={news.description} />

            <Link href={news.url}>
              <div className="btn btn-warning">بیشتر بخوانید</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

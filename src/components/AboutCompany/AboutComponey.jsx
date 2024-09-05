// components/AboutCompany/AboutCompany.js
import React from "react";

import "./AboutCompany-module.css"; // فرض بر این است که استایل‌ها در فایل CSS جداگانه قرار دارند
import { TiTick } from "react-icons/ti";
import Link from "next/link";
import { TiArrowForwardOutline } from "react-icons/ti";
import { LuMessagesSquare } from "react-icons/lu";

export default function AboutCompany() {
  return (
    <div className={"about-company-section "}>
      <div className={"wrapper"}>
        <div className={"full-about-section"}>
          <div className={"about-right-side"}>
            <div className={"title-header autoShow"}>
              <h4 className="autoShow">درباره مجموعه ما</h4>
              <span className={"sub-line"}></span>
            </div>
            <h3 className="autoShow">
              به مجموعه <span className="text-danger ">Shahrooz Tuning</span>{" "}
              خوش آمدید
            </h3>
            <p>
              به شهروز تیونینگ خوش آمدید! ما با افتخار به شما خدمات تخصصی در
              زمینه کاور بدنه خودرو، صافکاری PDR، و پولیش را ارائه می‌دهیم. با
              بیش از ۱۵ سال تجربه در اجرای نقاشی خودرو و خدمات مرتبط، هدف ما
              ارتقاء زیبایی و کیفیت خودروی شماست. خوشحالیم که به جمع مشتریان
              راضی ما پیوسته‌اید و امیدواریم که از خدمات ما بهره‌مند شوید. هر
              سوال یا نیازی دارید، ما در کنار شما هستیم!
            </p>

            <div className={"list-column"}>
              <div className={"right-column"}>
                <span>
                  <TiTick className={"about-icon"} />
                  احیای رنگ خودرو
                </span>
                <span>
                  <TiTick className={"about-icon"} />
                  صافکاری PDR
                </span>
                <span>
                  <TiTick className={"about-icon"} />
                  کاور رنگی و شفاف
                </span>
              </div>
              <div className={"left-column"}>
                <span>
                  <TiTick className={"about-icon"} />
                  سرامیک خودرو
                </span>
                <span>
                  <TiTick className={"about-icon"} />
                  لیسه گیری خودرو
                </span>
                <span>
                  <TiTick className={"about-icon"} />
                  نقاشی خودرو
                </span>
              </div>
            </div>

            <div className={"more-information-about"}>
              <Link href="/about">
                <h6 className="btn btn-warning more-btn">اطلاعات بیشتر</h6>
              </Link>

              <div className={"message-icon"}>
                <LuMessagesSquare />
              </div>

              <div className={"contact-us"}>
                <span>با ما در ارتباط باشید</span>
                <div className={"quez d-flex"}>
                  <Link href="/contact">
                    <h6>سوالات متداول</h6>
                  </Link>
                  <TiArrowForwardOutline className={"arrow-icon"} />
                </div>
              </div>
            </div>
          </div>
          <div className={"about-left-side"}>
            <img src="/img/car4.jpg" className="p-3" alt="About Company" />
          </div>
        </div>
      </div>
    </div>
  );
}

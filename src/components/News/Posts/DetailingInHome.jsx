"use client"

import React, { useState, useEffect } from "react";
import { newsData } from "@/datas";

import "../SoloNews-module.css";
import "./PdrSmoothin.css";

import NavbarSection from "../../NavbarSection/NavbarSection";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import SideBar from "../../Sidebar/SideBar";

const DetailingInHome = () => {
  const [post, setPostData] = useState(newsData);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavbarSection />

      {!post ? (
        <h2 className="text-white w-100 bg-danger text-center">
          Post not found
        </h2>
      ) : (
        <div className="container-section-news w-100 d-flex p-3">
          <SideBar postID={5} />
          <div>
            <div className="center-news w-100 ">
              <div className="w-100 text-center">
                <img src={'/img/detaling.jpg'} alt="image news" />
              </div>

              <div className="text-content">
                <h3 className="mt-3 mb-3"> دیتیلینگ خودرو در خانه</h3>

                <h5>1. آماده‌سازی ابزار و مواد</h5>
               
                  <ul className="p-2">
                    <li className="">
                      <span className="text-black ">مواد شوینده :</span> شامپو
                      مخصوص خودرو، پاک‌کننده‌های مخصوص شیشه و چرم
                    </li>
                    <li className="">
                      <span className="text-black ">ابزار شستشو :</span> اسفنج،
                      دستمال میکروفیبر، برس‌های نرم
                    </li>
                    <li className="">
                      <span className="text-black ">
                        محصولات واکس و پولیش :
                      </span>{" "}
                      واکس بدنه، پولیش، پاک‌کننده‌های آلودگی
                    </li>
                    <li className="">
                      <span className="text-black "> جارو برقی :</span> برای
                      تمیز کردن داخل خودرو
                    </li>
                  </ul>
      
                <h5>2. شستشوی بدنه</h5>

                <div className="text-center w-100">
                  <img
                    src={`/img/carvash.jpg`}
                    className="mb-4"
                    width={250}
                    alt="carsunBourn"
                  />
                </div>

           
                  <ul className="p-2">
                    <li className="">
                      <span className="text-black ">غبار و آلودگی‌ها :</span>{" "}
                      بتدا بدنه خودرو را با آب شستشو دهید تا گرد و غبار و
                      آلودگی‌ها از بین برود
                    </li>
                    <li className="">
                      <span className="text-black "> شامپو خودرو :</span> با
                      استفاده از شامپو مخصوص خودرو و اسفنج، بدنه را به آرامی
                      بشویید. اطمینان حاصل کنید که از حرکات دایره‌ای استفاده
                      کنید تا خط و خش ایجاد نشود.
                    </li>
                    <li className="">
                      <span className="text-black "> آبکشی :</span> پس از شستشو،
                      خودرو را با آب تمیز آبکشی کنید
                    </li>

                    <li className="">
                      <span className="text-black  ">نکته :</span>
                      مطمئن شوید که کاور از جنس مناسب و مقاوم در برابر UV باشد.
                    </li>
                  </ul>
      
                <h5>3. خشک کردن بدنه</h5>
          
                  <ul className="p-2">
                    <li className="">
                      <span className="text-black ">دستمال میکروفیبر:</span> از
                      دستمال میکروفیبر برای خشک کردن بدنه استفاده کنید. این کار
                      از ایجاد خط و خش جلوگیری می‌کند.
                    </li>
                  </ul>
      
                <h5>4. پولیش و واکس</h5>

                <div className="text-center w-100">
                  <img
                    src={`/img/vaksAndPolish.jpg`}
                    className="mb-4"
                    width={250}
                    alt="carsunBourn"
                  />
                </div>


             
                  <ul className="p-2">
                    <li className="">
                      <span className="text-black ">پولیش:</span> اگر بدنه خودرو
                      خط و خش دارد، از پولیش استفاده کنید. با استفاده از پد
                      پولیش و دستگاه مناسب، پولیش را به آرامی بر روی بدنه بزنید.
                    </li>
                    <li className="">
                      <span className="text-black ">واکس:</span> پس از پولیش،
                      واکس را بر روی بدنه بزنید تا درخشش و حفاظت بیشتری ایجاد
                      شود
                    </li>
                  </ul>


                <h5>5. تمیز کردن شیشه‌ها</h5>
      
                  <ul className="p-2">
                    <li className="">
                      <span className="text-black ">محلول شیشه‌شویی :</span> از
                      محلول شیشه‌شویی و دستمال میکروفیبر برای تمیز کردن شیشه‌ها
                      استفاده کنید. این کار باعث افزایش دید و زیبایی خودرو
                      می‌شود.
                    </li>
                  </ul>
   

                <h5>6. تمیز کردن داخل خودرو</h5>
          
                  <ul className="p-2">
                    <li className="">
                      <span className="text-black ">جارو برقی :</span> داخل
                      خودرو را با جارو برقی تمیز کنید. به صندلی‌ها، فرش‌ها و
                      جاهای سخت دسترسی توجه کنید
                    </li>
                    <li className="">
                      <span className="text-black ">تمیز کردن صندلی‌ها:</span>{" "}
                      اگر صندلی‌ها چرم هستند، از پاک‌کننده و نرم‌کننده مخصوص چرم
                      استفاده کنید. برای صندلی‌های پارچه‌ای، از شوینده‌های مخصوص
                      استفاده کنید.
                    </li>
                    <li className="">
                      <span className="text-black ">
                        تمیز کردن داشبورد و کنسول :
                      </span>{" "}
                      از دستمال میکروفیبر و پاک‌کننده‌های مخصوص برای تمیز کردن
                      داشبورد و کنسول استفاده کنید.
                    </li>
                  </ul>
            

                <h5>نتیجه‌گیری</h5>

                <p className="p-2 ">
                  دیتیلینگ خودرو در خانه نیاز به زمان و دقت دارد، اما با رعایت
                  مراحل بالا می‌توانید خودرویی تمیز و درخشان داشته باشید.
                </p>

                <div className="navbar-icons text-center w-100 d-flex justify-content-evenly ">
                  <div className="navbar-icon">
                    <a href={"www.instagram.com"}>
                      <FaInstagram />
                    </a>
                  </div>
                  <div className="navbar-icon">
                    <a href={"facebook.com"}>
                      <FaFacebookF />
                    </a>
                  </div>
                  <div className="navbar-icon">
                    <a href={"telegram.com"}>
                      <FaTelegramPlane />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default DetailingInHome;

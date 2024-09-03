// components/CarSunburn/CarSunburn.js
import React, { useState, useEffect } from "react";
import { newsData } from "@/datas";
import { useRouter } from "next/router";
import NavbarSection from "@/components/NavbarSection/NavbarSection";
import SideBar from "@/components/Sidebar/SideBar";
import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import '../SoloNews-module.css'


const CarSunburn = ({}) => {

  useEffect(() => {
  
    window.scrollTo(0, 0);
  }, []);

  const [post,setPost] = useState(newsData)

  return (
    <div>
      <NavbarSection />

      {!post ? (
        <h2 className="text-white w-100 bg-danger text-center">
          Post not found
        </h2>
      ) : (
        <div className="d-flex flex-column">
          <div className="container-section-news w-100 d-flex p-3">
            <SideBar postID={3} />
            <div className="">
              <div className="center-news w-100">
                <div className="w-100 text-center">
                  <img src={'/img/aftab.jpg'} alt="image news" />
                </div>

                <div className="text-content">
                  <h3 className="mt-3 mb-3">
                    چکونه از آفتاب سوختگی جلوگیری کنیم؟
                  </h3>

                  <h5>1. پارک کردن در سایه</h5>
                  <p className="p-2 ">
                    یکی از ساده‌ترین و مؤثرترین روش‌ها برای جلوگیری از آفتاب‌سوختگی، پارک کردن ماشین در مکان‌های سایه‌دار است. این کار به کاهش دمای داخلی خودرو و جلوگیری از تابش مستقیم نور خورشید به بدنه و شیشه‌ها کمک می‌کند.
                  </p>

                  <h5>2. استفاده از کاور ماشین</h5>
              
                     <ul className="p-2">
                      <li>
                        <span className="text-black">توضیح:</span> استفاده از کاور مخصوص خودرو می‌تواند به‌طور مؤثری از تابش نور خورشید به بدنه ماشین جلوگیری کند.
                      </li>
                      <div className="text-center w-100">
                        <img
                          src={`/img/aftab-car.webp`}
                          className="mb-4"
                          width={250}
                          alt="carsunBourn"
                        />
                      </div>
                      <li>
                        <span className="text-black">نکته:</span> مطمئن شوید که کاور از جنس مناسب و مقاوم در برابر UV باشد.
                      </li>
                    </ul>
             

                  <h5>3. استفاده از عایق‌های حرارتی</h5>
             
                     <ul className="p-2">
                      <li>
                        <span className="text-black">توضیح:</span> نصب عایق‌های حرارتی در داخل خودرو می‌تواند به کاهش دما و جلوگیری از تابش مستقیم نور خورشید کمک کند.
                      </li>
                      <li>
                        <span className="text-black">نکته:</span> عایق‌های حرارتی می‌توانند به کاهش مصرف انرژی در سیستم تهویه مطبوع نیز کمک کنند.
                      </li>
                    </ul>
        

                  <h5>4. شیشه‌های تیره</h5>
            
                     <ul className="p-2">
                      <li>
                        <span className="text-black">توضیح:</span> نصب شیشه‌های تیره یا استفاده از فیلم‌های UV می‌تواند از نفوذ اشعه‌های مضر UV به داخل خودرو جلوگیری کند.
                      </li>
                    </ul>
     

                  <h5>5. پوشش‌های محافظ</h5>
         
                     <ul className="p-2">
                      <li>
                        <span className="text-black">توضیح:</span> استفاده از پوشش‌های خاص برای بدنه ماشین می‌تواند از آسیب‌های ناشی از نور خورشید جلوگیری کند.
                      </li>
                      <li>
                        <span className="text-black">نکته:</span> این پوشش‌ها همچنین می‌توانند به تمیز نگه‌داشتن خودرو کمک کنند.
                      </li>
                    </ul>
       

                  <h5>6. تمیز کردن منظم</h5>
              
                     <ul className="p-2">
                      <li>
                        <span className="text-black">توضیح:</span> تمیز نگه داشتن بدنه ماشین و استفاده از واکس می‌تواند به حفظ رنگ و جلوگیری از آفتاب‌سوختگی کمک کند.
                      </li>
                      <li>
                        <span className="text-black">نکته:</span> هر چند وقت یکبار ماشین را شسته و از واکس‌های مخصوص خودرو استفاده کنید.
                      </li>
                    </ul>
       

                  <h5>نتیجه‌گیری</h5>
                  <p className="p-2 ">
                    با رعایت این نکات، می‌توانید به خوبی از ماشین خود در برابر آسیب‌های ناشی از نور خورشید محافظت کنید.
                  </p>

                  <div className="navbar-icons text-center w-100 d-flex justify-content-evenly ">
                    <div className="navbar-icon">
                      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </a>
                    </div>
                    <div className="navbar-icon">
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                      </a>
                    </div>
                    <div className="navbar-icon">
                      <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarSunburn;

// components/SoloNews/SoloNews.js
import React, { useState, useEffect } from "react";
import { newsData } from "@/datas";
import { useRouter } from "next/router";
import NavbarSection from "../NavbarSection/NavbarSection";
import './SoloNews-module.css'
import { FaInstagram, FaTelegramPlane, FaFacebookF } from "react-icons/fa";
import SideBar from "../Sidebar/SideBar";

export default function SoloNews() {
  const [postData] = useState(newsData);
  const router = useRouter();
  const { id } = router.query;

  const postId = parseInt(id, 10);
  const post = postData.find((p) => p.id === postId);

  useEffect(() => {
    if (!id) return; // جلوگیری از اجرای کد قبل از بارگذاری id
  }, [id]);

  return (
    <div>
      <NavbarSection />
      {!post ? (
        <h2 className="text-white w-100 bg-danger text-center">
          Post not found
        </h2>
      ) : (
        <div className={`container-section-news w-100 d-flex p-3 container`}>
          <SideBar />
          <div>
            <div className="center-news w-100">
              <div className="w-100 text-center">
                <img src={post.img} alt="image news" />
              </div>

              <div className="text-content">
                <h3 className="mt-3 mb-3">{post.title}</h3>

                <h5>1. اهمیت احیای رنگ خودرو :</h5>
                <p className="p-2 ">
                  {post.content} {/* محتوای پست را از داده‌ها بگیرید */}
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
      )}
    </div>
  );
}

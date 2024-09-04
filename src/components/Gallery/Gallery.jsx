// components/Gallery/Gallery.js
"use client";
import React, { useEffect, useState } from "react";
import "./Gallery-module.css";
import NavbarSection from "../NavbarSection/NavbarSection";
import { imgData } from "@/datas";

export default function Gallery() {
  const [imgDatas, setImgDatas] = useState(imgData);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);

  const showImage = (img) => {
    setSelectedImg(img); 
  };

  const closeImage = () => {
    setSelectedImg(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavbarSection />

      <div className="header-gallery">
        <h4>گالری ما</h4>
      </div>

      <div className="container-gallery">
        <div className="img-gallery">
          {imgDatas.map((img, index) => (
            <div key={index} className="img-item">
              <img
                src={img.img}
                alt="Gallery"
                onClick={() => showImage(img)} 
                className="gallery-thumbnail"
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="show-image" onClick={closeImage}>
          <div className="pos-rel" onClick={(e) => e.stopPropagation()}>
            <h2 className="close-window" onClick={closeImage}>
              X
            </h2>
            <img src={selectedImg.img} alt="Full view" className="full-image" /> 
            <h5 className="text-white mt-4 text-center">شهروز تیونینگ</h5>
          </div>
        </div>
      )}
    </div>
  );
}

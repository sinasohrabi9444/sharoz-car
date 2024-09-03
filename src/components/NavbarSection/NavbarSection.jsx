// components/NavbarSection/NavbarSection.js


import React, { useState } from "react";
import "./NavbarSection-module.css"; // فرض بر این است که استایل‌ها در فایل CSS جداگانه قرار دارند
import { FaInstagram, FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import TypoGrafi from "../TypoGrafi/TypoGrafi";
import Link from "next/link"; // استفاده از Link از Next.js
import { dataTypoGrafi } from "@/datas";

export default function NavbarSection() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex flex-column ">
      <div className={"section-navbar"}>
        <div className="container">
          <div className={"wrapper-navbar"}>
            <div className={"flexable-items"}>
              <div className={"logo"}>
                <img
                  src="/img/img-video/logo-id.png" // مسیر به صورت مطلق
                  width={120}
                  alt="logo with id"
                />
              </div>

              <button className={'hamburger'} onClick={toggleMenu}>
                &#9776; {/* آیکون همبرگری */}
              </button>
            </div>

            <ul className={isOpen ? "open" : ""}>
              <li>
                <Link href="/">خانه</Link>
              </li>
              <li>
                <Link href="/services">خدمات ما</Link>
              </li>
              <li>
                <Link href="/about">درباره ما</Link>
              </li>
              <li>
                <Link href="/contact">تماس با ما</Link>
              </li>
              <li>
                <Link href="/gallery">گالری ما</Link>
              </li>
              <div className={"navbar-icons"}>
                <FaInstagram className={"navbar-icon"} />
                <FaFacebookF className={"navbar-icon"} />
                <FaTelegramPlane className={"navbar-icon"} />
              </div>
            </ul>
          </div>
        </div>
      </div>

      <TypoGrafi data={dataTypoGrafi} />
    </div>
  );
}

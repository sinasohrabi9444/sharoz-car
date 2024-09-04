// pages/_app.js
"use client";
import "./globals.css"; // استایل‌های جهانی
import "bootstrap/dist/css/bootstrap.min.css"; // استایل‌های Bootstrap
import { Children, useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer"; // اگر نیاز دارید
import Loading from "@/components/Loading/Loading"; // اگر نیاز دارید
import Home from "@/components/Home/Home";
import NavbarSection from "@/components/NavbarSection/NavbarSection";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // تمیز کردن تایمر
  }, []);

  if (loading) {
    return <Loading />; // کامپوننت لودینگ
  }

  return (
    <div className="App">
      <NextNProgress
        color="#29D" // رنگ نوار پیشرفت
        startPosition={0.3} // موقعیت شروع نوار
        stopDelayMs={200} // زمان تاخیر برای توقف نوار
        height={3} // ارتفاع نوار
        
      />
      <Home />
      <Footer />
    </div>
  );
}

export default MyApp;

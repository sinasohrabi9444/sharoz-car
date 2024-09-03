// pages/_app.js
"use client";
import "../styles/globals.css"; // استایل‌های جهانی
import "bootstrap/dist/css/bootstrap.min.css"; // استایل‌های Bootstrap
import { Children, useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer"; // اگر نیاز دارید
import Loading from "@/components/Loading/Loading"; // اگر نیاز دارید
import Home from "@/components/Home/Home";
import NavbarSection from "@/components/NavbarSection/NavbarSection";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer); // تمیز کردن تایمر
  }, []);

  if (loading) {
    return <Loading />; // کامپوننت لودینگ
  }

  return (
    <div className="App">
      
      <Home />
      <Footer />
    </div>
  );
}

export default MyApp;

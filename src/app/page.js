// pages/_app.js
"use client";
import "./globals.css"; // استایل‌های جهانی
import "bootstrap/dist/css/bootstrap.min.css"; // استایل‌های Bootstrap
import { Children, useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer"; // اگر نیاز دارید
import Loading from "@/components/Loading/Loading"; // اگر نیاز دارید
import Home from "@/components/Home/Home";
import NavbarSection from "@/components/NavbarSection/NavbarSection";

import {motion} from "framer-motion"






function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

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
     <motion.div
       
       initial="pageInitial"
       animate="pageAnimate"
       variants={{
         pageInitial: {
           opacity: 0,
         },
         pageAnimate: {
           opacity: 1,
         },
       }}
     >
        <Home />
        <Footer />
        </motion.div>
    </div>
  );
}

export default MyApp;

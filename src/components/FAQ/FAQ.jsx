// components/FAQ/FAQ.js
import React, { useState } from 'react';
import './FAQ-module.css'; // فرض بر این است که استایل‌ها در فایل CSS جداگانه قرار دارند
import { faq } from '@/datas'; // اطمینان حاصل کنید که مسیر درست است

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [faqs, setFaqs] = useState(faq);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={"faq-container"}>
      <h3 className={`${"text-center"} mb-5 text-white`}>سوالات متداول</h3>
      {faqs.map((faq, index) => (
        <div key={index} className={"faq-item"}>
          <h3 onClick={() => toggleFAQ(index)} className={"faq-question"}>
            {faq.question}
          </h3>
          {openIndex === index && <p className={"faq-answer"}>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

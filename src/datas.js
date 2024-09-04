const newsData = [
  {
    id: 1,
    title: "احیای رنگ خودرو",
    img: `/img/car-polish.jpg`,
    date: "1403/01/01",
    url: "/Revivalofcarcolor",
    description:
      "احیای رنگ خودرو یکی از فرآیندهای مهم در نگهداری و بهبود ظاهر خودرو است. این فرآیند شامل مجموعه‌ای از مراحل است که هدف آن بهبود کیفیت رنگ خودرو و بازگرداندن درخشش و زیبایی اولیه آن می‌باشد. در ادامه به بررسی مراحل و مزایای احیای رنگ خودرو می‌پردازیم.",
  },
  {
    id: 2,
    title: "صافکاری PDR چیست ؟",
    date: "1400/11/23",
    img: `/img/pdr.webp`,
    url: "/PDR-smoothing",
    description:
      "صافکاری PDR (Paintless Dent Repair) یا صافکاری بدون رنگ، یک روش مدرن برای تعمیر دندانه‌ها و آسیب‌های سطحی بدنه خودرو است که نیاز به رنگ‌آمیزی مجدد ندارد. این تکنیک به ویژه برای آسیب‌های کوچک و متوسط ناشی از ضربات، مانند دندانه‌های ناشی از سنگ‌ریزه‌ها یا برخورد با درختان و دیگر اشیاء، بسیار مؤثر است. در ادامه به توضیح بیشتر درباره این روش می‌پردازیم.",
  },
  {
    id: 3,
    img: `/img/aftab.jpg`,
    date: "1403/05/17",
    title: "چگونه از آفتاب سوختگی جلوگیری کنیم ؟",
    url: "/Car-sunburn",
    description:
      "جلوگیری از آفتاب‌سوختگی خودرو یکی از نکات مهم در نگهداری و حفظ زیبایی و ارزش خودرو است. آفتاب‌سوختگی می‌تواند منجر به کدر شدن رنگ، ترک خوردن و آسیب به داخل خودرو شود. در ادامه به چند روش مؤثر برای جلوگیری از آفتاب‌سوختگی خودرو اشاره می‌کنیم:",
  },
  {
    id: 4,
    img: `/img/bodyfans.jpg`,
    date: "1399/01/21",
    title: "کاور های محافظتی (بادیفنس)",
    videoSrc: `/img/img-video/intro.webm`,
    url: "/Windshield-protective-covers",
    description:
      "کاورهای حفاظتی بادیفنس (BodyFence) یکی از محصولات محبوب در زمینه محافظت از رنگ و بدنه خودرو هستند. این کاورها به ویژه برای افرادی که به حفظ زیبایی و ارزش خودرو خود اهمیت می‌دهند، طراحی شده‌اند. در ادامه به ویژگی‌ها و مزایای این کاورها می‌پردازیم:",
  },
  {
    id: 5,
    img: `/img/detaling.jpg`,
    date: "1402/03/10",
    title: "دیتلینگ خودرو در خانه",
    url: "/Detailing-in-home",
    description:
      "دیتلینگ خودرو در خانه یک روش عالی برای حفظ و بهبود ظاهر خودرو است. این فرآیند شامل تمیز کردن، حفاظت و بازسازی بدنه، داخل و اجزای مختلف خودرو می‌شود. در ادامه، مراحل و نکات لازم برای دیتلینگ خودرو در خانه را بررسی می‌کنیم.",
  },
];

const dataTypoGrafi = [
  "به مجموعه Shahrooz Tuning خوش آمدید ",
  2000,
  "کاور های محافظتی (بادیفنس)",
  2000,
  "احیای رنگ خودرو ",
  2000,
  "صافکاری PDR",
  2000,
  "انواع کاور های رنگی",
  2000,
  "کاور های محافظتی (بادیفنس)",
  2000,
  "سرامیک خودرو",
  2000,
  "همه در مجموعه ما",
  2000,
];

const faq = [
  {
    question: "روش کار چگونه است ؟",
    answer:
      "روش کار به اینصورت است که شما با ما تماس میگیرید و بعد از رزرو کردن تایم مخصوص ماشین خود را می آورید و سپس ما کار را شروع میکنیم.",
  },
  {
    question: "چگونه می‌توانم با شما تماس بگیرم؟",
    answer:
      "شما می‌توانید از طریق فرم تماس در سایت یا شماره تماس‌های موجود با ما در ارتباط باشید.",
  },
  {
    question: "آیا خدمات شما شامل گارانتی می‌شود؟",
    answer:
      "بله، تمامی خدمات ما شامل گارانتی کیفیت هستند و در صورت بروز مشکل می‌توانید با ما تماس بگیرید.",
  },
  {
    question: "چگونه می‌توانم نوبت بگیرم؟",
    answer: "شما می‌توانید با تماس گرفتن نوبت تلفنی خود را رزرو کنید.",
  },
];

const imgData = [
  { id: 1, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448815/car1_take23.jpg` },
  { id: 2, img: ` https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448818/car2_czm8qo.jpg` },

  { id: 4, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448814/car4_dfdmqs.jpg` },
  { id: 5, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448815/car5_limsmd.jpg` },
  { id: 6, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448815/car6_tbtmfq.jpg` },
  { id: 7, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448816/car7_zvc1eu.jpg` },
  { id: 8, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448816/car8_essqzf.jpg` },
  { id: 9, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448817/car9_vz6d9l.jpg` },
  { id: 10, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448818/car10_ki39ds.jpg` },
  { id: 11, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448818/car11_sprldd.jpg` },
  { id: 12, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448821/car12_olkm0e.png` },
 
  { id: 13, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448820/car13_itlviv.jpg` },
  { id: 14, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448826/car14_kg0ezj.jpg` },
  { id: 15, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448819/car15_nmf8ab.jpg` },
  { id: 16, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448820/car16_w3y49w.jpg` },
  { id: 17, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448829/car17_tv118n.jpg` },
  { id: 18, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448827/car18_qkjbht.jpg` },
  { id: 19, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448823/car19_unmv9d.jpg` },
  { id: 20, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448829/car20_q2qgy3.jpg` },
  { id: 21, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448828/car21_jimbrq.jpg` },
  { id: 22, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448827/car22_d4tyey.jpg` },
  { id: 23, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448815/car23_tq3w3x.jpg` },
  { id: 24, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448816/car24_senac8.jpg` },
  { id: 25, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448817/car25_kdku0p.jpg` },
  { id: 26, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448817/car26_a7exzx.jpg` },
  { id: 27, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448817/car27_qyivec.jpg` },
  { id: 28, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448824/car28_r4esuq.jpg` },
  { id: 29, img: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448819/car29_ktuix9.jpg` },
];

const imgSliderData = [
  { id: 1, image: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448815/car1_take23.jpg` },
  { id: 2, image: ` https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448818/car2_czm8qo.jpg` },

  { id: 4, image: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448814/car4_dfdmqs.jpg` },
  { id: 5, image: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448815/car5_limsmd.jpg` },
  { id: 6, image: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448815/car6_tbtmfq.jpg` },
  { id: 7, image: `https://res.cloudinary.com/df2jqjw0f/image/upload/v1725448816/car7_zvc1eu.jpg` },
];

export { newsData, dataTypoGrafi, faq, imgData, imgSliderData };

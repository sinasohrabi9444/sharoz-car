// components/Loading/Loading.js
import { Commet } from 'react-loading-indicators';
import'./Loading-module.css'; // فرض بر این است که استایل‌ها در فایل CSS جداگانه قرار دارند

function Loading() {
  return (
    <div className={"sweet-loading"}>
      <Commet color="#f02727" size="medium" text="" textColor="" />
      <h3>در حال بارگذاری ...</h3>
    </div>
  );
}

export default Loading;

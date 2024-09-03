// pages/news/Revivalofcarcolor/[id].js
import DetailingInHome from "@/components/News/Posts/DetailingInHome";

export default function DetailingInHomePage({ params }) {
  const { id } = params;
  console.log(id);
  
  return <DetailingInHome  />;
}

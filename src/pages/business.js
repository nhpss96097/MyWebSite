import BusinessCard from "@/components/BusinessCard";
export default function business({}) {
  const BusinessCardData = [
    {
      title: "個人網站製作",
      description:
        "幫你做個人網站，可用於履歷、社交等。\n價錢計算：\n1.內容難度\n2.時限要求\n3.要求內容量",
      price: "NTD：2500 元起",
      Img: "/Business/website-1.png",
      OriginImages: ["/Business/website-2.png"],
    },
    {
      title: "影片剪輯",
      description:
        "幫你剪輯影片，上簡單特效、轉場、字幕等。\n價錢計算：\n1.內容難度\n2.時限要求\n3.要求內容量",
      price: "NTD：2000 元起",
      Img: "/Business/videoClip-1.png",
      OriginImages: ["/Business/videoClip-1.png"],
    },
    {
      title: "PPT 簡報製作",
      description:
        "幫你做PPT，報告、美化皆可。\n價錢計算：\n1.內容難度\n2.時限要求\n3.要求內容量",
      price: "NTD：500 元起",
      Img: "/Business/PPT-1.png",
      OriginImages: [
        "/Business/PPT-1.png",
        "/Business/PPT-2.png",
        "/Business/PPT-3.png",
        "/Business/PPT-4.png",
        "/Business/PPT-5.png",
      ],
    },
    {
      title: "Word 文件製作",
      description:
        "幫你做Word，報告、排版、履歷等皆可。\n價錢計算：\n1.內容難度\n2.時限要求\n3.要求內容量",
      price: "NTD：500 元起",
      Img: "/Business/Word-1.png",
      OriginImages: [
        "/Business/Word-1.png",
        "/Business/Word-2.png",
        "/Business/Word-3.png",
        "/Business/Word-4.png",
      ],
    },

    {
      title: "圖片編修",
      description:
        "幫你修圖，去背、合成照片、製作產品圖、商業廣告等，但照片人物美化不在我的範圍內。\n價錢計算：\n1.內容難度\n2.時限要求\n3.要求內容量",
      price: "NTD：500 元起",
      Img: "/Business/photoEditing-1.png",
      OriginImages: ["/Business/photoEditing-1.png"],
    },
  ];
  return (
    <div>
      {BusinessCardData.map((Data, index) => (
        <BusinessCard key={index} {...Data} />
      ))}
    </div>
  );
}

import Header from "../components/header";
import Card from "@/components/ProjectCard";

export default function project({}) {
  const projectData = [
    {
      title: "MERN 專案練習",
      description:
        "使用 React 作為前端框架，Node.js、MongoDB 作為後端服務，此網頁功能：1.帳號註冊系統、2.課程創建及註冊系統、3.個人資訊確認系統",
      Img: "/images/MERN-1.png",
      OriginImages: [
        "/images/MERN-1.png",
        "/images/MERN-2.png",
        "/images/MERN-3.png",
      ],
      Link: "https://github.com/nhpss96097/MERN-Project.git",
    },

    {
      title: "圖片搜尋網站",
      description:
        "使用 React 作為前端框架，搭配 JavaScript 語法，並使用 Pexels 的 API 建立的圖片搜尋網站。其功能有：1.搜尋圖片、2.載入更多圖片、3.點開圖片下載",
      Img: "/images/GalleryWebSite.png",
      OriginImages: [
        "/images/GalleryWebSite-1.png",
        "/images/GalleryWebSite-2.png",
      ],
      Link: "https://github.com/nhpss96097/GalleryWebSite.git",
    },

    {
      title: "Discord Grouping Bot",
      description:
        "通訊軟體 Discord 的機器人，使用 Discord.js 套件與 Discord API 進行互動，並利用JS程式碼撰寫的機器人。其功能有：1.創建隊伍、2.查詢隊伍、3.使用者透過按鈕快速加入或退出隊伍。根據需要也可修改成上課&學習用途之分組類別。",
      Img: "/images/DiscordBot.png",
      OriginImages: ["/images/DiscordBot.png"],
      Link: "https://github.com/nhpss96097/Discord-Grouping-Bot.git",
    },
    {
      title: "成績計算網站",
      description:
        "用於計算成績的網站(GPA制)，有以下功能：1.Merge Sort 排序演算法、2.成績計算、3.利用 JS 新增 HTML 元素(按按鈕新增form)。",
      Img: "/images/GradeCalculationWebsite.png",
      OriginImages: ["/images/GradeCalculationWebsite.png"],
      Link: "https://github.com/nhpss96097/GradeCalculationWebsite.git",
    },
  ];
  return (
    <div>
      <Header />
      {projectData.map((project, index) => (
        <Card key={index} {...project} />
      ))}
    </div>
  );
}

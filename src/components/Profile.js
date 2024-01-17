import Image from "next/image";
import styles from "@/styles/profile.module.css";
import Link from "next/link";

export default function Profile({}) {
  const specialtyImages = [
    <Image
      img-text="JavaScript"
      src={"/Icon/JS.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="HTML"
      src={"/Icon/HTML.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="CSS"
      src={"/Icon/CSS.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="NodeJS"
      src={"/Icon/node-js.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="React"
      src={"/Icon/React.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="NextJS"
      src={"/Icon/NextJS.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="JAVA"
      src={"/Icon/JAVA.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="PowerPoint"
      src={"/Icon/PPT.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="Word"
      src={"/Icon/Word.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="Premiere"
      src={"/Icon/PR.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
    <Image
      img-text="Photoshop"
      src={"/Icon/PS.png"}
      alt="specialty"
      layout="responsive"
      sizes="50"
      width={50}
      height={50}
      className={styles.specialtyImg}
    />,
  ];
  return (
    <div>
      <div id="img-profile" className={styles.imgProfile}>
        <section id="img" className={styles.myPicture}>
          <Image
            src={"/Icon/mypic.png"}
            alt="My picture"
            layout="responsive"
            quality={100}
            width={200}
            height={220}
            className={""}
          />
          <p className={styles.imgTitle}>古新弘</p>
        </section>

        <section id="profile" className={styles.profile}>
          <h3 className={styles.profileTitle}>簡介</h3>
          <div className={styles.profileText}>
            <ol>
              <li>了解網頁製作相關內容 HTML、CSS、JS。</li>
              <li>了解並會使用網頁前後端相關框架 Next.js、React、Express。</li>
              <li>Unity 遊戲開發經驗。</li>
              <li>專業簡報 & 文稿製作與編排。</li>
              <li>Java OCAJP證照。</li>
              <li>會使用 Photoshop 編修圖片及 Premiere Pro 剪輯影片。</li>
            </ol>
          </div>
        </section>
      </div>

      <section id="specialty" className={styles.specialty}>
        <h3 className={styles.specialtyTitle}>專長</h3>
        <div className={styles.specialtyDiv}>
          {specialtyImages.map((image, index) => (
            <div
              key={index}
              className={styles.specialtyImg}
              img-text={image.props["img-text"]}
            >
              {image}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

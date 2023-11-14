import styles from "@/styles/card.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  Img,
  Link,
  OriginImage,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div>
      <section className={styles.card}>
        <ul className={styles.ul}>
          <li className={styles.imgTitle}>
            <h3 className={styles.titleText}>{title}</h3>
          </li>

          <li className={styles.cardImg}>
            <Image
              src={Img}
              layout="responsive"
              alt="Picture"
              width={200}
              height={220}
              className={styles.img}
              onClick={openModal}
            />
            <p className={styles.p}>{description}</p>
          </li>

          <li className={styles.cardatag}>
            <a
              href={Link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githublink}
            >
              GitHub
            </a>
          </li>
        </ul>
      </section>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent}>
            <Image
              src={OriginImage}
              alt="Original Picture"
              layout="responsive"
              width={200}
              height={220}
              className={styles.modalImg}
            />
            <button className={styles.modalButton}>
              <div className={styles.modalButtonImg}>X</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

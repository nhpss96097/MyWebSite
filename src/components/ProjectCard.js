import styles from "@/styles/card.module.css";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard({
  title,
  description,
  Img,
  Link,
  OriginImages,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function switchImg(direction) {
    const lastIndex = OriginImages.length - 1;
    let newIndex;

    if (direction === "next") {
      newIndex = currentImageIndex < lastIndex ? currentImageIndex + 1 : 0;
    } else {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : lastIndex;
    }

    setCurrentImageIndex(newIndex);

    if (direction !== "next") {
      closeModal();
    }
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
              sizes="50vw"
              width={400}
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
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <Image
              id="moadlImg"
              src={OriginImages[currentImageIndex]}
              alt="Original Picture"
              layout="responsive"
              width={200}
              height={220}
              className={styles.modalImg}
              onClick={closeModal}
            />
            <button className={styles.modalButtonNext}>
              <div
                className={styles.modalNextButton}
                onClick={() => switchImg("next")}
              >{`>`}</div>
            </button>
            <button className={styles.modalButtonClose} onClick={closeModal}>
              <div className={styles.modalCloseButton}>X</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

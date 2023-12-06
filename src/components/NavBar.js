import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/navBar.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "../../next.config";

export default function NavBar({}) {
  const router = useRouter();

  const [openNavBar, setOpenNabBar] = useState(false);

  function openModal() {
    setOpenNabBar(true);
  }

  function closeModal() {
    setOpenNabBar(false);
  }

  function toggleModal() {
    setOpenNabBar(!openNavBar);
  }

  useEffect(() => {
    if (openNavBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openNavBar]);

  return (
    <div>
      <nav>
        <ul className={styles.navul}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.activeLink : styles.a}
          >
            Home
          </Link>
          <Link
            href="/project"
            className={
              router.pathname === "/project" ? styles.activeLink : styles.a
            }
          >
            My Project
          </Link>
          <a
            href="https://github.com/nhpss96097?tab=repositories"
            target="_blank"
            className={styles.a}
          >
            GitHub
          </a>
          <Link
            href="/business"
            className={
              router.pathname === "/business" ? styles.activeLink : styles.a
            }
          >
            Business
          </Link>
          <Link
            href="/contact"
            className={
              router.pathname === "/contact" ? styles.activeLink : styles.a
            }
          >
            Contact
          </Link>
        </ul>
      </nav>

      <nav>
        <div className={styles.navButton}>
          <Image
            src={"/images/nav-button.png"}
            alt="RWD nav img"
            layout="responsive"
            quality={100}
            width={50}
            height={50}
            className={""}
            onClick={toggleModal}
          />
        </div>
        {openNavBar && (
          <div className={styles.navModalDiv}>
            <ul className={styles.navModalUl} onClick={toggleModal}>
              <Link
                href="/"
                className={
                  router.pathname === "/"
                    ? styles.activeModalLink
                    : styles.ModalLink
                }
              >
                Home
              </Link>
              <Link
                href="/project"
                className={
                  router.pathname === "/project"
                    ? styles.activeModalLink
                    : styles.ModalLink
                }
              >
                My Project
              </Link>
              <a
                href="https://github.com/nhpss96097?tab=repositories"
                target="_blank"
                className={styles.ModalLink}
              >
                GitHub
              </a>
              <Link
                href="/business"
                className={
                  router.pathname === "/business"
                    ? styles.activeModalLink
                    : styles.ModalLink
                }
              >
                Business
              </Link>
              <Link
                href="/contact"
                className={
                  router.pathname === "/contact"
                    ? styles.activeModalLink
                    : styles.ModalLink
                }
              >
                Contact
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

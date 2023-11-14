import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/navBar.module.css";

export default function NavBar({}) {
  const router = useRouter();
  return (
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
          href="/contact"
          className={
            router.pathname === "/contact" ? styles.activeLink : styles.a
          }
        >
          Contact
        </Link>
      </ul>
    </nav>
  );
}

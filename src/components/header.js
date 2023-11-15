import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/header.module.css";
import NavBar from "@/components/NavBar";

const name = "Shin";

export default function header({}) {
  return (
    <div className={styles.layout}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="author" content="Shin" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.h1}>{name}</h1>
        <NavBar />
      </header>
    </div>
  );
}

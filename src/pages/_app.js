import "@/styles/globals.css";
import Header from "@/components/header";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

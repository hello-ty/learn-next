import Head from "next/head";
import classes from "src/styles/Home.module.css";
import { Footer } from "src/components/Footer";
import { Main } from "src/components/Main";
import { Header } from "src/components/Header";
import { useCallback, useEffect } from "react";

// const handleClick = (e) => {
//   console.log(e.target.href)
//   e.preventDefault();
// };

export default function Home() {
  const foo = 1;

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  return (
    <div className={classes.container}>
      <Head>
        <title>IndexPage</title>
      </Head>

      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}

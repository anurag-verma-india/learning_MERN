// https://www.youtube.com/watch?v=gSSsZReIFRk&ab_channel=Vercel

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {

  // const res = await fetch('https://api.github.com/users/anurag-verma-india');
  // const data = await res.json();

  const res = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata', { cache: "no-store" });
  return (
    <div className={styles.page}>
      {/* <Link href="/about">About </Link> */}

      {/* <h1>{data.avatar_url}</h1>
      <h1>{data.login}</h1>
      <Image src={data.avatar_url} width={100} height={100} alt={data.login} /> */}

      {console.log(res)}


    </div>
  );
}

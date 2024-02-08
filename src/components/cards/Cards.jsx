import Link from "next/link";
import styles from "./cards.module.css";
import Image from "next/image";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/sample.png" width={100} height={100} alt="post" className={styles.image} />
      </div>
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>

            </span>
            <span className={styles.category}></span>
          </div>
          <Link href={`/po`}>
            <h1></h1>
          </Link>
          <div className={styles.desc}></div>
        </div>
    </div>
  );
};

export default Cards;